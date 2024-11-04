import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBUw62WVvvwkSEAN-mNGuUtdQkxNCaYoms",
  authDomain: "fir-push-notification-2f03c.firebaseapp.com",
  projectId: "fir-push-notification-2f03c",
  storageBucket: "fir-push-notification-2f03c.firebasestorage.app",
  messagingSenderId: "631547748558",
  appId: "1:631547748558:web:8c49f57063b077e128709f",
  measurementId: "G-D1MHJ5HE86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const onMessagelistener = () => {
  return new Promise((resolve, reject) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
  })
}


// function onMessageListener() {
//   return new Promise((resolve, reject) => {
//       // Simulate an async operation
//       setTimeout(() => {
//           const success = true; // Change this to false to simulate an error
//           if (success) {
//               resolve("Message received!");
//           } else {
//               reject(new Error("Failed to receive message"));
//           }
//       }, 1000);
//   });
// }