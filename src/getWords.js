
const { MongoClient } = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.BD_LINK)

const getWordDay = async () => {
    await client.connect()
    console.log('Соединение установлено');
    const words = client.db().collection('words')
    return await words.findOneAndUpdate({ isSended: false }, { $set: { isSended: true } })
}

module.exports = getWordDay