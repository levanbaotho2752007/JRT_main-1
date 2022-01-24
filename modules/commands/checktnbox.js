const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "checktnbox",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "JRT",
	description: "Xem thông tin box của bạn",
	commandCategory: "Nhóm", 
	usages: "boxinfo", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, Threads, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
  let sl = threadInfo.messageCount;
  return api.sendMessage(`Tổng tin nhắn của box: ${sl}`,event.threadID);
}