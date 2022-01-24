module.exports.config = {
 name: "nobra",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Umemaru Matsuromao",
 description: "Random ảnh nobra1",
 commandCategory: "random-img",
 usages: "nobra1",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('http://api.leanhtruong.net/api/image?api_key=LEANHTRUONG=5TCxa33XboLsLkpxE0nH8SzN65m8s2i5GnGrIlV4mCQ6ba38KE=APIKEY=PLANFREE&image=nobra').then(res => {
 let ext = res.data.success.substring(res.data.success.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({
      attachment: fs.createReadStream(__dirname + `/cache/nobra2.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra2.${ext}`), event.messageID);
    };
    request(res.data.success).pipe(fs.createWriteStream(__dirname + `/cache/nobra2.${ext}`)).on("close", callback);
   })
}