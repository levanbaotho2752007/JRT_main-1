module.exports.config = {
	name: "trai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh trai xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "trai",
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
						attachment: fs.createReadStream(__dirname + `/cache/trai.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trai.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trai.${ext}`)).on("close", callback);
			})
}