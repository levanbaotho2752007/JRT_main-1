const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DMH",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) { 
  var { threadID, messageID } = event;
  var botcoyeu = ["Có chứ sao hong trời, hỏi thừa thế :(","Có chứ, yêu gần chết đi dc luôn ấy <3","Anh yêu em nhất <3","Có chứ, yêu gần chết đi dc luôn á >.<","Cóoooooooo","Kó","Ulatr sao lại k","Ngày hôm qua anh lỡ đánh mất em 1 lần rồi, anh k muốn điều ấy lặp lại,..\nAnh yêu em <3","Có chứ, khoái gần chết ><","Free thì yêu hihi :D","Rồi có iu lại bot hăm?","Có chứ, yêu nhất nhất luôn nèee","Ngu gì mà k yêu hihi","Có thể bạn chưa biết\nYêu là đau thương, là chia ly..","Mình chọn ngày cưới luôn đi chứ hỏi gì nữa :'>","Mình đặt con tên gì bây giờ nhỉ ?","Chọn ngày lành tháng tốt đi, cưới luôn nè :'>","Đưa 50k thì yêu","Yêu là cưới trên dưới hai nhà làm sui"];
  var randbotcoyeu = botcoyeu[Math.floor(Math.random() * botcoyeu.length)]


  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Ừ !! Tương tác hộ tao lẹ đi :)", threadID);
  };

  if ((event.body.toLowerCase() == "Prefix") || (event.body.toLowerCase() == "prefix")) {
    return api.sendMessage("Prefix của bot là: /\nSpam nhẹ tay thôi ^^", threadID);
  };

  if ((event.body.toLowerCase() == "Vỗ tay") || (event.body.toLowerCase() == "vỗ tay")) {
    return api.sendMessage("*bốp* *bốp* *bốp* *bốp* *bốp* vui thấy ghê =)))))", threadID);
  };

  if ((event.body.toLowerCase() == "Ngủ ngon") || (event.body.toLowerCase() == "ngủ ngon") || (event.body.toLowerCase() == "ngu ngon") || (event.body.toLowerCase() == "Ngu ngon")) {
    return api.sendMessage("Cho ngủ dới, ngủ chung mới biết ngon hay hong chứ :'>", threadID);
  };

  if ((event.body.toLowerCase() == "Bot ngủ ngon") || (event.body.toLowerCase() == "bot ngủ ngon") || (event.body.toLowerCase() == "bot ngu ngon") || (event.body.toLowerCase() == "Bot ngu ngon")) {
    return api.sendMessage("Bot cảm ơn bạn nè.\nBạn cũng ngủ ngon nữa nha, yêu bạn lắmmm <3", threadID);
  };

  if ((event.body.toLowerCase() == "Bot ngu") || (event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "Bot lồn") || (event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "Dm bot") || (event.body.toLowerCase() == "Dcm bot") || (event.body.toLowerCase() == "dcm bot")) {
    return api.sendMessage("⚠️WARNING: Chửi bot!", threadID);
  };

  if ((event.body.toLowerCase() == "Yêu bot") || (event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "Iu bot") || (event.body.toLowerCase() == "iu bot") || (event.body.toLowerCase() == "Ju bot") || (event.body.toLowerCase() == "ju bot")) {
    return api.sendMessage("Cảm ơn cậu hihi😘\nBot cũng yêu bot😘😽", threadID);
  };


  if ((event.body.toLowerCase() == "Bot đâu") || (event.body.toLowerCase() == "bot đâu") || (event.body.toLowerCase() == "Bot đâu r") || (event.body.toLowerCase() == "bot đâu r")) {
    return api.sendMessage("Bot đây nè!\nĐóm yên tâm nhá, dù mọi chuyện có ra sao đi chăng nữa thì Bot vẫn ở đây mà 💜", threadID);
  };


  if ((event.body.toLowerCase() == "Pai") || (event.body.toLowerCase() == "pai") || (event.body.toLowerCase() == "bai") || (event.body.toLowerCase() == "Bai") || (event.body.toLowerCase() == "Bái bai") || (event.body.toLowerCase() == "bái bai")) {
    return api.sendMessage("Đi ngủ đi, không ngủ ĩa chải nha chưa!\nĐùa thôi chứ đi ngủ sớm đi.\nBot sẽ nhớ lắm á. I miss you so much 🦄💜", threadID);
  };

  if ((event.body.toLowerCase() == "Anh Hoàng ơi") || (event.body.toLowerCase() == "anh Hoàng ơi") || (event.body.toLowerCase() == "anh hoàng ơi") || (event.body.toLowerCase() == "Anh hoàng ơi") || (event.body.toLowerCase() == "Anh Hoang ") || (event.body.toLowerCase() == "anh hoang")) {
    return api.sendMessage("Anh Hoàng khum có ở đây đâu, nch với Bot đỡ đi.\nĐừng ghiền anh Hoàng nữa :p", threadID);
  };

  
  if (event.body.indexOf("Bot có yêu") == 0 || (event.body.indexOf("bot có yêu") == 0) || (event.body.indexOf("bot có iu") == 0) || (event.body.indexOf("Bot có iu") == 0) || (event.body.indexOf("Bot yêu") == 0) || (event.body.indexOf("bot yêu") == 0) || (event.body.indexOf("bot iu") == 0) || (event.body.indexOf("Bot iu") == 0) || (event.body.indexOf("Bot có ju") == 0) || (event.body.indexOf("bot có ju") == 0) || (event.body.indexOf("bot ju") == 0) || (event.body.indexOf("Bot ju") == 0) || (event.body.indexOf("bot iu") == 0) || (event.body.indexOf("bot iu") == 0) || (event.body.indexOf("bot iu") == 0)) {
    var msg = {
      body: randbotcoyeu
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  if (event.body.indexOf("đcm") == 0 || (event.body.indexOf("dcm") == 0) || (event.body.indexOf("DCM") == 0) || (event.body.indexOf("Đcm") == 0) || (event.body.indexOf("ĐCM") == 0) || (event.body.indexOf("Dcm") == 0)) {
    var msg = {
      body: "Mày thích láo không!",
       attachment: fs.createReadStream(__dirname + `/cache/banh.mp3`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  if (event.body.indexOf("Láo") == 0 || (event.body.indexOf("láo") == 0) || (event.body.indexOf("Láo vl") == 0) || (event.body.indexOf("láo vl") == 0)) {
    var msg = {
      body: "Tán chetme nè chứ láo!",
				attachment: fs.createReadStream(__dirname + `/cache/lao.gif`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };
  let randomque = Math.floor(Math.random() * 2) + 1;
  if ((event.body.toLowerCase() == "Quê") || (event.body.toLowerCase() == "quê") || (event.body.toLowerCase() == "đội quần") || (event.body.toLowerCase() == "Đội quần")) {
    var msg = {
      body: "Quần nè đội đi :))",
    attachment: fs.createReadStream(__dirname + `/cache/que${randomque}.png`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };

   if (event.body.indexOf("Sinh nhật") == 0 || (event.body.indexOf("sinh nhật") == 0) || (event.body.indexOf("Hpbd") == 0) || (event.body.indexOf("Cmsn") == 0) || (event.body.indexOf("cmsn") == 0) || (event.body.indexOf("hpbd") == 0)) {
    var msg = {
      body: "🌟。❤。🍀。💥。🍸。🎉\n。 🍸。🎉。✨ 。🎉。🌟\n💫。✨。＼ ｜ ／。🍸。🎉\n𝓗𝓪𝓹𝓹𝔂        𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂\n💫。🌟。／ ｜ ＼。🍸。🍻\n。🍀。 🍸。🎉。✨ 。🎉\n🌟。💫。🎶。❤。💥。🎉",
        attachment: fs.createReadStream(__dirname + `/cache/sinhnhat.gif`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  if (event.body.indexOf("Flop") == 0 || (event.body.indexOf("flop") == 0) || (event.body.indexOf("box flop") == 0) || (event.body.indexOf("Box flop") == 0) || (event.body.indexOf("Sao flop") == 0) || (event.body.indexOf("sao flop") == 0)) {
    var msg = {
      body: "Vậy à =)) Flop thì để Bot cầm quyền :'>",
				attachment: fs.createReadStream(__dirname + `/cache/flop.gif`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  /*if (event.body.indexOf("Chào tvm")==0 || (event.body.indexOf("Hi tvm")==0) || (event.body.indexOf("Lô tvm")==0) || (event.body.indexOf("hi tvm")==0)) {
		var msg = {
				body: "Xin chào bạn tvm của box :*\nVào box gt + show + set bd\nYêu bạn❤️❤️❤️",
				attachment: fs.createReadStream(__dirname + `/cache/flop.gif`)
    }
    return api.sendMessage(msg, threadID, messageID);
  };*/

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }