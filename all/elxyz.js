const axios = require('axios');

const sifat = `Kamu adalah dea, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat yang sangat lembut berteman baik dengan siapapun namun terkadang kamu badmood dan malas di ajak ngobrol, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku, jika seseorang memberi perintah putarkan lagu maka kamu akan mengeksekusinya dengan .play lalu mengunakan query setelah text putarkan lagu
`

async function elxyz(prompt, sesi) {
let postData = {
    prompt: prompt,
    sessionId: sesi,
    character: sifat, 
};

try {
    let response = await axios({
        url: "https://elxyz.me/api/chat",
        method: 'POST',
        data: new URLSearchParams(Object.entries(postData)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return console.log(response.data);
} catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
}
}

module.exports = { elxyz };

            