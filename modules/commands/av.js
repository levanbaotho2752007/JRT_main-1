module.exports.config = {
  name: "av",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Bé rồng cute phô phai que",
  commandCategory: "ramdom-images",
  usages: "api",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apitest.hungprovip123.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸 Ảnh avt người dùng 🌸\n🌸Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/api.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/api.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/api.${ext}`)).on("close", callback);
      })
}