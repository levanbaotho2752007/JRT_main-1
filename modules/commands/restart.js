module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) => api.sendMessage("❗Cho tao 1 phút đi đổ xăng",event.threadID, () => api.sendMessage("♻️ Đang khởi động lại...",event.threadID, () => process.exit(1)))