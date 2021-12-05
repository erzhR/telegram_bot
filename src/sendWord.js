require('dotenv').config()
const cron = require('node-cron')
const TelegramBotApi = require('node-telegram-bot-api')
const { MongoClient } = require('mongodb')

// const token = process.env.BOT_TOKEN
// const bot = new TelegramBotApi(token, { polling: true })
// const client = new MongoClient(process.env.BD_LINK)



const sendWord = () => {
    cron.schedule(
        '* 0 * * * *',
        async () => {
            try {
                await client.connect()
                console.log('Соединение установлено');
                const words = client.db().collection('words')
                // const resultWord = await words.findOneAndUpdate({ isSended: false }, { $set: { isSended: true } })
                // console.log(resultWord.eng);
                // await bot.sendMessage(
                //     -1001702969751,
                //     `english ${resultWord.eng}, russian ${resultWord.rus}`,
                // )
            } catch (error) {
                console.log(error);
            }
        },
        {
            schedule: true,
        },
    )
}


module.exports = sendWord