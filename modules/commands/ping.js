module.exports.config = {
	name: "ping",
	version: "1.0.4",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 30
};

module.exports.run = async function({ api, event, args }) {
	try {
    var { threadID, messageID } = event;
  var tl = ["Người dùng Facebook đã xóa bạn ra khỏi nhóm.", "Một người liên hệ đã xóa bạn ra khỏi nhóm.", "Admin removed you from the group.", "Ngoi cái đầu lên đây tt", "A participant removed you from the group.", "Quản trị viên đã xoá bạn ra khỏi nhóm."];
  var rand = tl[Math.floor(Math.random() * tl.length)]

		const botID = api.getCurrentUserID();
		const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : rand, mentions = [], index = 0;
		
		for (const idUser of listUserID) {
			/*body = "♥️"+"❤️"+"💛"+"💚"+"💙"+"💜"+"🖤"+"💖"+"💝"+"💓"+"💘"+"💍"+"🎁"+"💋"+"💎"+"💠"+"🌈"+"🌍"+"🌕"+"☀️"+"💑"+"💞" + body ;*/
          body = "" + body;
			mentions.push({ id: idUser, tag: " ‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}