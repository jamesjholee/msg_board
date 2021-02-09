require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

const db = {
    1: {id: 1, channelName: 'Test', messages:['testing123','testing312']},
    2: {id: 2, channelName: 'Test2', messages:[]}
}

app.get('/channel', (req, res) => {
    return res.send(Object.values(db))
})

app.get('/channel/:channelId', (req, res) => {
    return res.send(db[req.params.channelId])
})

app.post('/channel/:channelId', (req, res) => {
    const newMessage = req.body.message
    db[req.params.channelId].messages.push(newMessage)
    return res.send(db[req.params.channelId])
})

app.listen(process.env.PORT,() => console.log(`Example app listneing on port ${process.env.PORT}!`))