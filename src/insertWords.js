const client = new MongoClient(process.env.BD_LINK)

const insertWordsWeek = async (sendedWords) => {
    try {
        const words = client.db().collection('words')
        await words.insertMany(sendedWords)
    } catch (error) {
        console.log(error);
    }

}
module.exports = insertWordsWeek
module.exports = client