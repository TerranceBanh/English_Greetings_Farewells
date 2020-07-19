// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    greetingsAndFarewells: [
        {ch: '你好',  en: 'hello', },
        {ch: '你好吗？',  en: 'how are you?', },
        {ch: '拜拜',  en: 'bye bye', },
        // {ch: '再会',  en: '[we will] hello again', },
        {ch: '明天见',  en: 'see you tomorrow', },
        {ch: '喂',  en: 'hey/hi (answering the phone)', },
        {ch: '再见',  en: 'goodbye', },
        {ch: '早上好，你早，早',  en: 'good morning', },
        {ch: '下午好',  en: 'good afternoon', },
        {ch: '晚上好',  en: 'good evening', },
        {ch: '晚安',  en: 'good night', },
        {ch: '你怎么样？',  en: 'how is it going?', },
        {ch: '你的周末怎么样？',  en: 'how was your weekend?', },
        {ch: '回头见',  en: 'see you soon', },
        {ch: '下个星期见',  en: 'see you next week', },
        {ch: '改天再聊',  en: 'talk to you later', },
        {ch: '慢走',  en: 'take care', },
    ],
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector(\`[src='./english/${
                (() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()
            }.mp3']\`).play()">
                &#9654;
                <audio preload="none" src="./english/${(() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






