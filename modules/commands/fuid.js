module.exports.config = {
	name: "fuid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
	description: "Lấy UID của link của Profile.",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 1
}


module.exports.run = async({api, event, args}) => {
const { threadID, messageID } = event;
const tool = require("fb-tools");
try {
const fuid = await tool.findUid(args[0] || event.messageReply.body);
  		api.sendMessage(fuid, event.threadID, event.messageID)  
}
catch(e){
    
		api.sendMessage("⚡️Người dùng không tồn tại hoặc liên kết không hợp lệ!!!",event.threadID,event.messageID)
   }
}

