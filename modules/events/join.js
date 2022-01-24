module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
  const fs = global.nodemodule["fs-extra"];
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  let random = Math.floor(Math.random() * 3) + 1;
  let pathImg = __dirname + `/cache/joinGif/join${random}.gif`;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`「 ${global.config.PREFIX} 」♬ ${(!global.config.BOTNAME) ? "𝟹 ꓥ ♡ ꓶ - 𝙱 𝙾 𝚃" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(
      {body:`🌼 Kết nối thành công!\n🌼 Chào mừng mọi người đến với Bot của:\n       ღ 𝐋𝐞̂ 𝐕𝐚̆𝐧 𝐁𝐚̉𝐨 𝐓𝐡𝐨̣ ღ\n🌼 Chúc mọi người có phút giây trải nghiệm tuyệt vời ♥\n🌼 Bot không chấp nhận với những trường hợp 𝙎𝙥𝙖𝙢, 𝘾𝙝𝙪̛̉𝙞 𝘽𝙤𝙩\n🌼 Nếu phát hiện sẽ 𝙊𝙪𝙩𝙗𝙤𝙭 không điều kiện\n🌼 Nếu có thắc mắc vui lòng lh Admin Bot để được hỗ trợ!`,
      attachment: fs.createReadStream(pathImg) },
      threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`join${random}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Bà con đâu ra tiếp kháchh\n👋Xin chào bà tám\n{name}\nChào mừng đến với xóm:\n「 {threadName} 」\n{type} là Bà tám thứ {soThanhVien} của xóm xàm xí đú này 👏🥳🎉" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Các cậu' : 'Cậu')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
