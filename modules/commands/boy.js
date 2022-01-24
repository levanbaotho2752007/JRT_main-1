module.exports.config = {
	name: "boy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh trai",
	commandCategory: "Hình Ảnh",
	usages: "boy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.leanhtruong.net/api/image?api_key=LEANHTRUONG=5TCxa33XboLsLkpxE0nH8SzN65m8s2i5GnGrIlV4mCQ6ba38KE=APIKEY=PLANFREE&image=boy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Gì, ảnh trai cho chị em nè 🥴🥴`,
						attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback);
			})
}