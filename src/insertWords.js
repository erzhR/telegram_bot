const { MongoClient } = require('mongodb')
const parse = require('./parse')

require('dotenv').config()

const client = new MongoClient(process.env.BD_LINK)

const insertWordsWeek = async () => {
    try {
        const resultWords = await parse()
        await client.connect()
        console.log('Соединение установлено');
        const words = client.db().collection('words')
        await words.insertMany(resultWords)
    } catch (error) {
        console.log(error);
    }

}
module.exports = insertWordsWeek