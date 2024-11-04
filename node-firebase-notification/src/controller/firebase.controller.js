import { NotificationService } from "../service/notificationService.js";

const firabaseNotification = async (req, res) => {
    try {
        const { title, body, deviceToken } = req.body
        const result = await NotificationService.sendNotification(deviceToken, title, body)
        if (!result) return res.send("sending error")
        res.json({ message: "notification sent: ", success: true, data: result })
    } catch (error) {
        res.json({ message: "notification error: ", success: false })
    }
}

const firabaseMultipleNotification = async (req, res) => {
    try {
        const { title, body, deviceTokens } = req.body
        const result = await NotificationService.sendMultipleNotification(deviceTokens, title, body)
        if (!result) return res.send("sending error")
        res.json({ message: "notification sent: ", success: true, data: result })
    } catch (error) {
        res.json({ message: "notification error: ", success: false })
    }
}

async function sendEveryMinutNotification() {
    const title = "send message"
    const body = "Every Minute send notification"
    const deviceToken = "token"
    await NotificationService.sendNotification(deviceToken, title, body)
}

export { firabaseNotification, sendEveryMinutNotification, firabaseMultipleNotification }