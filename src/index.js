const cron = require('node-cron')
const TelegramBotApi = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const token = '1091053097:AAFUvWXOy0YNxB_X9WlSYrt8VJiDoOoSMAQ'
const client = new MongoClient('mongodb+srv://erzh:hi1px22s@cluster0.9nvlr.mongodb.net/telegramBot')

const bot = new TelegramBotApi(token, { polling: true })

cron.schedule(
    '0 * * * * *',
    async () => {
        try {
            await bot.sendMessage(
                -1001702969751,
                `Проверка`,
            )
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
