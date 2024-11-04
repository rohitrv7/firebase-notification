import express from 'express'
import { router } from './routes/firebase.routes.js'
import cors from 'cors'
import cron from 'node-cron'
import { sendEveryMinutNotification } from './controller/firebase.controller.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000

app.use('/api/firebase', router)

cron.schedule("* * * * *", async ()=>{
    await sendEveryMinutNotification()
    
})
app.get('/', async (req, res) => {
    res.send("hlo")
})
app.listen(port, () => console.log(`http://localhost:${port}`))