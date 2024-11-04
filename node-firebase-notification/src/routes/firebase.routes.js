import express from 'express'
import { firabaseNotification,firabaseMultipleNotification } from '../controller/firebase.controller.js'

const router = express.Router()
router.post('/send', firabaseNotification)
router.post('/send-multipleuser', firabaseMultipleNotification)

export { router }