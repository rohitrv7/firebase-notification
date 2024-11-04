import { useEffect, useState } from 'react';
import { messaging, onMessagelistener } from './utils/firebaseUtils'
import { getToken } from "firebase/messaging";
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from 'react-toastify';
function App() {
  const [fcmToken, setFcmToken] = useState(null)
  const fetchFcmToken = async () => {
    try {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        const token = await getToken(messaging, { vapidKey: 'vapidCode' })
        console.log(token);
        setFcmToken(token)

      } else if (permission === 'denied') {
        alert("notification denied !")
      }
      else {

      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchFcmToken();
  }, []); // Added dependency array to run this effect only once

  onMessagelistener()
    .then(payload => {
      toast(
        <div>
          <strong>{payload.notification.title}</strong>
          <strong>{payload.notification.body}</strong>
        </div>,
        { position: "top-right" }
      )
      console.log(payload);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <>
      <ToastContainer />
      <div className='container'>
        <h1>FCM Token</h1>

        <Card bg="primary">
          <Card.Body> {fcmToken && <p>{fcmToken}</p>}</Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
