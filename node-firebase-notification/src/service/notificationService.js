import admin from '../utils/firebase.js'
export class NotificationService {
    // send notifiation single user
    static async sendNotification(deviceToken, title, body) {
        const messaging = {
            notification: {
                title, body
            },
            token: deviceToken
        }

        try {
            const response = await admin.messaging().send(messaging)
            return response
        } catch (error) {
            console.log("node firebase error : ", error);
            throw error

        }
    }
    // send notification multiple user
    static async sendMultipleNotification(deviceTokens, title, body) {
        const messages = deviceTokens.map(token => ({
            notification: {
                title, body
            },
            token: token
        }))

        try {
            const response = await admin.messaging().sendEach(messages)
            return response
        } catch (error) {
            console.log("node firebase error : ", error);
            throw error
        }
    }
}
