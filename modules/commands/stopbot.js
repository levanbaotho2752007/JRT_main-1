module.exports.config = {
name: "stopbot",
version: "1.0.0",
hasPermssion: 2,
credits: "HTHB",
description: "Tắt Bot.",
commandCategory: "system",
cooldowns: 0
};
module.exports.run = ({event, api}) =>api.sendMessage("✅Nhận lệnh!\nBot sẽ được tắt sau thông báo này!",event.threadID, () =>process.exit(0))