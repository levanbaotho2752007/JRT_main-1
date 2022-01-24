module.exports.config = {
	name: "id",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DMH - DƯƠNG MINH HOÀNG",
	description: "Lấy ID người dùng, nhóm và những thứ linh tinh",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Threads, Currencies }) {
    const axios = require('axios');
    const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
    const resault = await speedTest.getSpeed(); //get speedtest
    const res = await axios.get(`https://le31.glitch.me/poem`);
	    var poem = res.data.data; // get data thính
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var namee = (await Users.getData(event.senderID)).name // get name
    var datathread = (await Threads.getData(event.threadID)).threadInfo; // get data, id box
    var namethread = datathread.threadName; // get name box
    const listUserID = event.participantIDs
      var id = listUserID
      exp = [];
      var name = await Users.getData(id)
      for(const idUser of listUserID) {
      const countMess = await Currencies.getData(event.senderID) || await Currencies.getData(id);
      exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
  }
      exp.sort(function (a, b) { return b.exp - a.exp });
      const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;       
      const infoUser = exp[rank - 1];
  
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`👋Chào cậu ${namee}\n📌ID của bạn: ${event.senderID}\n👑Tên nhóm: ${namethread}\n🧬ID nhóm: ${event.threadID}\n⚡Speed: ${resault}Mbs\n🏆Đạt hạng ${rank} với ${infoUser.exp} tin nhắn\n🕐Day & Time:\n📆 ${gio} 🕰\n📝Thính: ${poem}\n🌼 Chúc bạn online vui vẻ 🌸`, event.threadID, event.messageID);
  else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`👋Chào cậu ${namee}\n📌ID của ${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}\n👑Tên nhóm: ${namethread}\n🧬ID nhóm: ${event.threadID}\n⚡Speed: ${resault}Mbs\n🕐Day & Time:\n📆 ${gio} 🕰\n📝Thính: ${poem}\n🌼 Chúc bạn online vui vẻ 🌸`, event.threadID);
		return;
	}
	
	}