module.exports.config = {
  name: "callad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang fix by Jukie",
  description: "thông báo lỗi của bot đến admin hoặc góp ý",
  commandCategory: "Nhóm",
  usages: "[lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var name = (await Users.getData(event.senderID)).name 
  

 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "📩Bạn có 1 phản hồi mới!\n📎Từ: " + name +  "\n🕐Lúc: "+ gio +"\n      --------------------\n「 "+ event.body + " 」", mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "calladmin"}))
     } 
   break;}
    case "calladmin": {
      api.sendMessage({ 
        body: `♻️Phản hồi từ admin ${name} đến bạn:\n      --------------------\n「 ${event.body} 」\n      --------------------\n»💬Phản hồi tin nhắn này để tiếp tục gửi báo cáo về admin`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID,
  type: "reply"}), handleReply.messID);
   break;}
     
     }
  
  
};

module.exports.run = async function({ api, event,Threads, args, Users }) {
  if (!args[0])
    return api.sendMessage(
      "❗Bạn chưa nhập nội dung cần báo cáo",
      event.threadID,
      event.messageID
    );
  //var data = await api.getUserInfo(event.senderID); 
  var name = (await Users.getData(event.senderID)).name;
  var idbox = event.threadID;
 // const url = (api.getCurrentUserID(event.senderID));

  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  var namethread = datathread.threadName;

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
  api.sendMessage(
    "📝Đã gửi lời nhắn của bạn đến Admin Bot✔️\n🕐Vào lúc: " + gio,
    event.threadID,
    () => {    //e📩📨📤✉️📩📑📎📌e♻️❗
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`📩Bạn có 1 lời nhắn mới!\n📎Từ: ${name}\n👑Box: ${namethread}\n🧬ID box: ${idbox}\n      -----------------------\n📑Lời nhắn: ${args.join(
            " "
          )}\n      -----------------------\n🕐Lúc: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};