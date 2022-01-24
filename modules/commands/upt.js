module.exports.config = {
  name: "upt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DMH",
  description: "Thông tin Admin DMH",
  commandCategory: "Phương tiện",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async({ api, event, Users }) => {
var name = (await Users.getData(event.senderID)).name
const request = global.nodemodule["request"];
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
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/ph9CYXX.gif",
 "https://i.imgur.com/R6j9nOQ.gif",
 "https://i.imgur.com/5LMCvfq.gif",
 "https://i.imgur.com/CubnhJh.gif",
 "https://i.imgur.com/kkYtnwW.gif",
 "https://i.imgur.com/bSPLhs2.gif",
  ];
  var callback = () => api.sendMessage({body:`🌼 Admin: 𝓑𝓐̉𝓞 𝓣𝓗𝓞̣™\n🌸 Uptime: [ ${hours} : ${minutes} : ${seconds} ]\n🌼 Tổng người dùng: ${global.data.allUserID.length}\n🌸 Tổng nhóm: ${global.data.allThreadID.length}\n🌼 Speed: ${resault}Mbs\n🌸 Ping: ${Date.now() - timeStart}ms\n🌼 Ram used: ${byte2mb(pidusage.memory)}\n🌸 Day & Time:\n📆 ${gio} 🕰`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   }
;