import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "senderId",
  appId: "appId",
  measurementId: "measurement"
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