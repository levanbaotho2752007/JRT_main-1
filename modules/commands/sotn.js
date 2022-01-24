module.exports.config = {
	name: "sotn",
	version: "1.7.0",
	hasPermssion: 0,
	credits: "Mirai Team fix get by D-Jukie",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "Nhóm",
	usages: "[all/tag]",
	cooldowns: 5
};
module.exports.run = async function ({ Users, api, event, Currencies }) {
const listUserID = event.participantIDs
  var id = listUserID
      exp = [];
      var name = await Users.getData(id)
      for(const idUser of listUserID) {
      const countMess = await Currencies.getData(idUser);
      exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
  }
      exp.sort(function (a, b) { return b.exp - a.exp });
      const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;       const infoUser = exp[rank - 1];
      
      return api.sendMessage(`Bé iu của Bot đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);

}