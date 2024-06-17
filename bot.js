const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const axios = require('axios')
const { createCanvas, loadImage, registerFont } = require('canvas')
const fs = require('fs')

const token = process.env.API_TOKEN
const waterMarkText = process.env.WATER_MARK_TEXT
//create a bot instance
const bot = new TelegramBot(token, { polling: true })

//   "/start" command handler
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'send foto to add water mark')
})

//handle photo
bot.on('photo', async (msg) => {
    try {
        const photo = msg.photo[msg.photo.length - 1] //same photo will be stored in different sizes in "msg" , selecting the last item in the array which is the largest sized according to convention. 
        const file_id = photo.file_id
        const file = await bot.getFile(file_id)
        const file_url = `https://api.telegram.org/file/bot${token}/${file.file_path}`

        //Download photo
        const response = await axios({
            url: file_url,
            method: 'GET',
            responseType: 'arraybuffer'
        })


        //Process foto
        const imageBuffer = Buffer.from(response.data, 'binary')
        const image = await loadImage(imageBuffer)

        const canvas = createCanvas(image.width, image.height)
        const canvasContext = canvas.getContext('2d')
        canvasContext.drawImage(image, 0, 0, image.width, image.height)

        //Add water mark
        canvasContext.font = '30px Cursive'
        canvasContext.fillStyle = 'rgba(255,255,255,0.7)'
        canvasContext.textAlign = 'center'
        canvasContext.textBaseline = 'bottom'
        canvasContext.fillText(waterMarkText, canvas.width / 2, canvas.height - 20);

        const buffer = canvas.toBuffer()
        bot.sendPhoto(msg.chat.id, buffer, { caption: "completed" })
    }
    catch (err) {
        console.error(
            'Error in processing photo:', err
        )
        bot.sendMessage(msg.chat.id, 'Failed, Try again')

    }
})

//Handle errors
bot.on('polling_error', (err) => {
    console.error('Polling error:', err)
})

console.log("bot is running....")
console.log(waterMarkText)