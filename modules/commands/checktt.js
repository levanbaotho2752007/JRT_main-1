module .exports .config = {
	name: "checktt",
	version: "1.7.0",
	hasPermssion: 0,
	credits: "Mirai Team fix get by D-Jukie",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "Nhóm",
	usages: "[all/tag]",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "all": "%1. %2 với %3 tin nhắn\n",
    },
    "en": {
        "all": "%1. %2 with %3 messages\n",
    }
}
module.exports.run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
var mention = Object.keys(event.mentions);
if (args[0] == "all") {
            var { participantIDs, adminIDs } =(await Threads.getData(event.threadID)).threadInfo;   
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            var number = 1, msg = "", storage = [], exp = [];
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : (typeof ((await Users.getData(idUser)).name) == "undefined") ? 0 : (await Users.getData(idUser)).name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
           
            exp.sort(function (a, b) { return b.exp - a.exp });
            for (const lastData of exp)  msg += getText("all", number++, lastData.name, lastData.exp);

            return api.sendMessage(`ĐỘ TƯƠNG TÁC TRONG BOX\n         🌼🌸🌼🌸🌼🌸\n\n` + msg + `\n❌KHÔNG SPAM TIN NHẮN !!`, event.threadID);

}
    else 
    if(event.type == "message_reply") { mention[0] = event.messageReply.senderID }
    if (mention[0]) {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            //var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            //const rank = exp.findIndex(info => parseInt(info.listUserID) == parseInt(event.senderID)) + 1;
            return api.sendMessage(`Bé iu ${(await Users.getData(mention[0])).name} đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
}
else {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
          
            return api.sendMessage(`Bé iu của Bot đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
}
}