importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBUw62WVvvwkSEAN-mNGuUtdQkxNCaYoms",
    authDomain: "fir-push-notification-2f03c.firebaseapp.com",
    projectId: "fir-push-notification-2f03c",
    storageBucket: "fir-push-notification-2f03c.firebasestorage.app",
    messagingSenderId: "631547748558",
    appId: "1:631547748558:web:8c49f57063b077e128709f",
    measurementId: "G-D1MHJ5HE86"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOption = {
        body: payload.notification.body,
        icon: payload.notification.icon
    }
    self.registration.showNotification(notificationTitle, notificationOption)
});