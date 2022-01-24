  module.exports.config = {
    name: "tiec",
    version: "1.0.4",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "tag toàn bộ thành viên",
    commandCategory: "system",
    usages: "[Text]",
    cooldowns: 2
  };

  module.exports.run = async function({ api, event, args }) {
      const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    try {
      var { threadID, messageID } = event;
    var tl = ["Người dùng Facebook đã xóa bạn ra khỏi nhóm.", "Một người liên hệ đã xóa bạn ra khỏi nhóm.", "Admin removed you from the group.", "Ngoi cái đầu lên đây tt", "A participant removed you from the group."];
    var rand = tl[Math.floor(Math.random() * tl.length)]

      const botID = api.getCurrentUserID();
      const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
      var body = 'Nhà ' + args.join(" ") + ' mở tiệc lúc ' + gio , mentions = [], index = 0;
      
      for (const idUser of listUserID) {
        /*body = "♥️"+"❤️"+"💛"+"💚"+"💙"+"💜"+"🖤"+"💖"+"💝"+"💓"+"💘"+"💍"+"🎁"+"💋"+"💎"+"💠"+"🌈"+"🌍"+"🌕"+"☀️"+"💑"+"💞" + body ;*/
            body = "" + body;
        mentions.push({ id: idUser, tag: " ‎", fromIndex: index - 1 });
        index -= 1;
      }

      return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

    }
    catch (e) { return console.log(e); }
  }