// var admin = require("firebase-admin");
import admin from 'firebase-admin'
// var serviceAccount = require("./fir-push-notification.json");
import serviceAccount from  './fir-push-notification.json' assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin