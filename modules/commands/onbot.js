module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Heluuu bot của Chung come back đây <3",event.threadID, () =>process.enter(1))