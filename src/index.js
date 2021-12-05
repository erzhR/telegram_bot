const cron = require('node-cron')
const TelegramBotApi = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const sendWord = require('./sendWord')
const { MongoClient } = require('mongodb')
const insertWordsWeek = require('./insertWords')
const getWordDay = require('./getWords')
require('dotenv').config()
const token = process.env.BOT_TOKEN
const client = new MongoClient(process.env.BD_LINK)

const bot = new TelegramBotApi(token, { polling: true })


cron.schedule(
    '0 * * * * *',
    async () => {
        try {
            // await client.connect()
            // console.log('Соединение установлено');
            // const words = client.db().collection('words')
            // const resultWord = await getWordDay()
            // console.log('resultWord', resultWord);
            // // const resultWord = await words.findOneAndUpdate({ isSended: false }, { $set: { isSended: true } })
            // // console.log(resultWord.eng);
            // await bot.sendMessage(
            //     -1001702969751,
            //     `U+1F1EC: *${resultWord.value.eng}*,\n russian: *${resultWord.value.rus}*`,
            //     // reply_markup = keyboard2, parse_mode = "Markdown")
            // )
        } catch (error) {
            console.log(error);
        }
    },
    {
        schedule: true,
    },
)

bot.on('message', async (response) => {
    const chatId = response.chat.id
    const userId = response.chat.last_name
    if (response.text === '/start')
        await bot.sendMessage(chatId, 'Всем привет я бот')
    else await bot.sendMessage(chatId, 'Не понимаю')
})