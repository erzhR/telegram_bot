const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config()

const parse = async () => {
    let wordsData = []
    const getHTML = async (url) => {
        try {
            const { data } = await axios.get(url);
            return cheerio.load(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    try {
        const element = await getHTML(process.env.PARSE_LINK)
        element('.dict-word').each((i, elem) => {
            if (i <= 7) {
                const eng = element(elem).find('span.eng').text()
                const rus = element(elem).find('span.rus').text()
                wordsData.push({ eng, rus })
            } else return

        })
    } catch (error) {
        console.log(error);
    }
    return wordsData
}

module.exports = parse