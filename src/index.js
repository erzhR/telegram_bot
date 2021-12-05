const cron = require('node-cron')
const TelegramBotApi = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
require('dotenv').config()
const parse = require('./parse')
const token = process.env.BOT_TOKEN

const bot = new TelegramBotApi(token, { polling: true })

cron.schedule(
    '0 * * * * *',
    async () => {
        try {
            // await bot.sendMessage(
            //     -1001702969751,
            //     `Проверка`,
            // )
        } catch (error) {
            console.log(error);
        }
    },
    {
        schedule: true,
    },
)

// const start = async () => {
//     try {
//         await client.connect()
//         console.log('Соединение установлено');
//         await client.db().createCollection('words')
//         const words = client.db().collection('words')
//         await words.insertOne({
//             engWord: 'Hello',
//             rusWord: 'Привет',
//             isSended: false
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()
bot.on('message', async (response) => {
    const chatId = response.chat.id
    const userId = response.chat.last_name
    if (response.text === '/start')
        await bot.sendMessage(chatId, 'Всем привет я бот')
    else await bot.sendMessage(chatId, 'Не понимаю')
})
// const addWords = async () => {
//     const resultWords = await parse()
//     await insertWordsWeek(resultWords)
//     console.log(resultWords);
// }
// addWords()
// insertWordsWeek()

