module.exports.config = {
  name: "ghepdoi",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "JRT",
  description: "Ghep doi ngau nhien",
  commandCategory: "Game", 
  usages: "ghép", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
         var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 10000) api.sendMessage("Bạn cần 10000 đô cho 1 lần ghép hãy tích cực làm việc hoặc xin admin bot!\n🤑Có làm mới có ăn🤑",event.threadID,event.messageID)
        else {
        var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        api.changeNickname(`Cục cưng của ${name}`, event.threadID, event.senderID);
        api.changeNickname(`Bé iu của ${namee}`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Nam🧑" : sex == 1 ? "Nữ👩‍🦰" : "Trần Đức Bo";
        Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `Hoàn thanh ghép đôi bạn đã mất 500 đô!\nNgười ghép đôi với bạn có giới tính: ${gender}\nTỉ lệ hợp đôi: ${tle}\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}