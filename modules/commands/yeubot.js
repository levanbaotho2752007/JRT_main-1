const fs = require("fs");
module.exports.config = {
	name: "Yêu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL, Users }) {
  var name = (await Users.getData(event.senderID)).name
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu bot")==0 || (event.body.indexOf("Yêu bot")==0) || (event.body.indexOf("yeu bot")==0) || (event.body.indexOf("Yeu bot")==0)) {
		var msg = {
				body: "Cảm ơn cậu hihi😘, bot cũng yêu bot😘😽",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}