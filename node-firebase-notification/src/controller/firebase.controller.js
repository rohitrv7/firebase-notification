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
    const deviceToken = "eM-lAUuOvL-5l4Yw3CsCX3:APA91bGW7DVyinrU3ssP2iyClMin0qZx2HyHgbHfQn8ECBQZVDdhRTNr8xfRQxuBfoJGdOtdJejTemK6xK8k-wB7pqLhw31MMUMGF85AU-afAHF3NiQYAcE"
    await NotificationService.sendNotification(deviceToken, title, body)
}

export { firabaseNotification, sendEveryMinutNotification, firabaseMultipleNotification }