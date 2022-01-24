module.exports.config = {
 name: "waibu",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Umemaru Matsuromao",
 description: "Random ảnh",
 commandCategory: "random-img",
 usages: "Siesta",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://Waifu-API.tien-hunghung.repl.co').then(res => {
 let ext = res.data.success.substring(res.data.success.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({
      body: "Tự hào là wjbu chính hiệu",
      attachment: fs.createReadStream(__dirname + `/cache/siesta1.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta1.${ext}`), event.messageID);
    };
    request(res.data.success).pipe(fs.createWriteStream(__dirname + `/cache/siesta1.${ext}`)).on("close", callback);
   })
}