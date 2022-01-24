module.exports.config = {
	name:"uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
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
    const resault = await speedTest.getSpeed();
	axios.get('https://XUAN-UPTIME.tien-hunghung.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
	let callback = function () {
					api.sendMessage({
                                                body: `  ༎ຶ‿༎ຶ ᗰIᑎᕼ ᕼOᗩᑎG ᗷOT ༎ຶ‿༎ຶ\n\n🌸 Uptime: [ ${hours} : ${minutes} : ${seconds} ]\n🌸 Tổng người dùng: ${global.data.allUserID.length}\n🌸 Tổng nhóm: ${global.data.allThreadID.length}\n🌸 Prefix: ${global.config.PREFIX}\n🌸 Ram used: ${byte2mb(pidusage.memory)}\n🌸 Speed: ${resault}Mbs\n🌸 Ping: ${Date.now() - timeStart}ms\n🌸 Số ảnh hiện có: ${count} ảnh.\n🌸 Day & Time:\n📆 ${gio} 🕰`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}