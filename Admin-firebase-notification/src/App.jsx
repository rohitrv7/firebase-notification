import { useState } from 'react';
import './App.css'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'

function App() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [fcmToken, setFcmToken] = useState('')
  const [loading, setLoading] = useState(false)
  const handlePushNotification = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        title: title,
        body: body,
        deviceToken: fcmToken
      }
      const response = await axios.post('http://localhost:3000/api/firebase/send', data)
      
      if (response.status === 200) {
        toast.success(
          <div>
            <div>Notification sent successfully </div>
          </div>,
          { position: "top-right" }
        )
      } else {
        toast.error(
          <div>
            <div>Failed to send notification</div>
          </div>,
          { position: "top-right" }
        )
      }

    } catch (error) {
      console.log("error---", error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <ToastContainer />
      <Form>
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control type="text" placeholder="name@example.com" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Body" className="mb-3">
          <Form.Control type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="FcmToken" className="mb-3">
          <Form.Control type="text" placeholder="FCM token" required value={fcmToken} onChange={(e) => setFcmToken(e.target.value)} />
        </FloatingLabel>
        <Button type="submit" onClick={handlePushNotification} disabled={loading}>{loading ? "sending..." : "send notification"}</Button>
      </Form >
    </>
  )
}

export default App
