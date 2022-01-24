const fs = require("fs");
module.exports.config = {
name: "kcolenh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng mod by DMH",
	description: "Chửi đi em",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	var { threadID, messageID } = event;
	if (event.body.indexOf("/")==0 || (event.body.indexOf("/")==0) || (event.body.indexOf("/")==0) || (event.body.indexOf("/")==0) || (event.body.indexOf("/")==0) || (event.body.indexOf("/")==0)) {
		var msg = {
				body: "Time: " + gio,
				//attachment: fs.createReadStream(__dirname + `/cache/banh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}