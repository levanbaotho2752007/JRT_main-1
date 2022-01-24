const fs = require("fs");
module.exports.config = {
name: "eat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "eat",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("eat")==0 || (event.body.indexOf("Eat")==0)) {
		var msg = {
				body: "nhăm nhăm nhăm",
				attachment: fs.createReadStream(__dirname + `/cache/eat.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}