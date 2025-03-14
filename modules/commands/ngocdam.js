module.exports.config = {
    name: "ngocdam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thanh dz",
    description: "Random ảnh Linh Ngọc Đàm :))",
    commandCategory: "random-img",
    usages: "lnd",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get('http://nqvapi.ml//lnd.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/lnd.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lnd.${ext}`), event.messageID);
                };
                request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/lnd.${ext}`)).on("close", callback);
            })
}