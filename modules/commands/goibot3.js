var _0x167cbc=_0x142f;function _0x142f(_0x2a59a6,_0x10301e){var _0x4ee155=_0x642c();return _0x142f=function(_0x4f22f6,_0x568943){_0x4f22f6=_0x4f22f6-(0x1896+0x119c+-0x29a3);var _0x17a077=_0x4ee155[_0x4f22f6];return _0x17a077;},_0x142f(_0x2a59a6,_0x10301e);}(function(_0x27432b,_0x3facf9){var _0x3b4d02=_0x142f,_0x200669=_0x27432b();while(!![]){try{var _0x37872b=parseInt(_0x3b4d02(0x93))/(-0x2c4+-0x20bf+0x2384)*(-parseInt(_0x3b4d02(0x95))/(-0x2071*0x1+0xd56+-0x65f*-0x3))+parseInt(_0x3b4d02(0x90))/(-0x4b0+-0x34e*0x7+0x4b*0x5f)*(parseInt(_0x3b4d02(0xa1))/(-0x19*-0xb7+0x4*0x4fd+-0x25cf))+parseInt(_0x3b4d02(0x92))/(0x1d68+-0x25dc+0x9*0xf1)*(parseInt(_0x3b4d02(0x8f))/(-0x943+0x4*-0x224+0x5f3*0x3))+-parseInt(_0x3b4d02(0x99))/(-0x17e9+-0xcfe+0x24ee)*(parseInt(_0x3b4d02(0x9d))/(0x1a92+0x24fd+-0x1a1*0x27))+parseInt(_0x3b4d02(0x9b))/(0x121*0x9+0x4*0x979+0x6dc*-0x7)*(parseInt(_0x3b4d02(0x91))/(-0x2*0x18e+0x51*0x1d+-0x607))+parseInt(_0x3b4d02(0xa3))/(-0xe1d+-0x211c+-0xa*-0x4ba)+parseInt(_0x3b4d02(0x9c))/(-0x931*0x3+0x1*-0x2665+0x14*0x34d)*(-parseInt(_0x3b4d02(0x98))/(-0x628+0xdd4+-0x79f));if(_0x37872b===_0x3facf9)break;else _0x200669['push'](_0x200669['shift']());}catch(_0x5a598d){_0x200669['push'](_0x200669['shift']());}}}(_0x642c,-0x8*-0x8fd4+-0x74b3f+0x7b9f6),module[_0x167cbc(0x9e)][_0x167cbc(0x96)]={'name':_0x167cbc(0x94),'version':_0x167cbc(0xa2),'hasPermssion':0x0,'credits':_0x167cbc(0x9a),'description':_0x167cbc(0x97)+_0x167cbc(0xa0),'commandCategory':_0x167cbc(0x9f),'usages':'','cooldowns':0x2,'denpendencies':{}});function _0x642c(){var _0x429c3e=['1330087kEVENA','5148UEJBRz','927VMRNmE','458390tBVyqZ','1390GMQBFh','17791ntYVTu','goibot3','14QmhHci','config','Gọi\x20Bot\x20Ve','13LnTLEA','1666273pjRXoz','ManhG','117XzaYlw','1245924oVNLLC','16FTVeYP','exports','admin','rsion\x203','932rZQzRt','1.1.0'];_0x642c=function(){return _0x429c3e;};return _0x642c();}

module.exports.handleReply = async function({
	api: e,
	args: a,
	Users: o,
	event: n,
	handleReply: s
}) {
	var t = await o.getNameUser(n.senderID);
	switch (s.type) {
		case "reply":
			var i = global.config.ADMINBOT;
			for (let a of i) e.sendMessage({
				body: "♻️Phản hồi từ\n" + "❤"+ t + ":\n「 " + n.body + " 」",
				mentions: [{
					id: n.senderID,
					tag: t
				}]
			}, a, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				messageID: a.messageID,
				messID: n.messageID,
				author: n.senderID,
				id: n.threadID,
				type: "goibot"
			})));
			break;
		case "goibot":
			e.sendMessage({
				body: `${n.body}`,
				mentions: [{
					tag: t,
					id: n.senderID
				}]
			}, s.id, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				author: n.senderID,
				messageID: a.messageID,
				type: "reply"
			})), s.messID)
	}
}, module.exports.handleEvent = async ({
	event: e,
	api: a,
	Users: o,
	Threads: n
}) => {
	var {
		threadID: s,
		messageID: t,
		body: i,
		senderID: r
	} = e;
	if (r == a.getCurrentUserID()) return;
	var d = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	let m = await o.getNameUser(e.senderID);
	var l = e.threadID;
	let g = e.senderID,
		h = (await n.getData(e.threadID)).threadInfo;
	const c = global.config.ADMINBOT;
  //Thêm, sửa các câu trả lời ở đây
	var D = [
    "Yêu em <3", "Hi, chào bạn", "Cậu gọi có việc gì không?", "Dạ, có em đây, yêu em không mà gọi <3. hmm...", `${m} sử dụng callad để liên lạc với admin!`, `${m} gọi em có việc gì thế`, `${m}, yêu em ko mà gọi😢`, `${m}, tôi yêu bạn vl ❤`, `${m}, bạn có yêu tôi không ❤`, `${m}, dạ có em đây:3`, `${m}, yêu Admin bot đi rồi hãy gọi`, `${m}, yêu em ❤`, `${m}, cần gì cứ liên hệ admin nhé <3`, `${m}, Em đây`,"Ơi nghe nèe","Bot đây!","Kêu bot làm gì á >.<","Dạ ơi","Đang bận, kêu giề..","Kêu gì, nhớ lắm hả","Ulatr đang ngủ","Đang ngủ luôn á má","Sống chung vs nhau mà cứ kêu kêu","Cho xin 50k mua tà tưa đyy","Bot hoạt động 24/24\nĐiều hành bởi admin Dương Minh Hoàng","Đang combat kêu cái chết luôn rồi này =.=","Kêu gì cái đồ bị ế !","Uống trà sữa hong :3","Đang học kêu cái giề","Nhớ bot lắm hả!","iu hong mà kêu","Ulatr! bot nè...","Câu cá với bot hong...","Kêu cái gì mà kêu -.-","Muốn nói iu Bot hay giề😻","Đi ăn với bot hong :3","Nhớ lắm hả kiu quài -.-","Cho hun cái đi😍","Có bồ chưa mà kêu!","Gọi bot hay gọi anh Hoàng","Ơi, bank tiền cho bot đi","T đoán là Chi Chi lại kêu t :))"
    ],
		y = D[Math.floor(Math.random() * D.length)];

  //Các câu gọi bot
	["bot", "bot ơi", "bot oi"].forEach((e => {
      
		let o = e[0].toUpperCase() + e.slice(1);
		if (i === e.toUpperCase() | i === e | o === i) {
			let o = h.threadName;
			modules = "Gọi bot:", console.log(modules, e + "|", o), a.sendMessage(y, s, (() => {
				var n = c;
				for (var n of c) a.sendMessage(`👑Box: ${o}\n🧬ID box: ${l}\n📎Tên: ${m} \n💕ID User: ${g}\n🕒Time: ${d}\n😍Gọi bot: ${e}`, n, ((e, a) => global.client.handleReply.push({
					name: this.config.name,
					author: r,
					messageID: a.messageID,
					messID: t,
					id: l,
					idUser: g,
					type: "goibot"
				})))
			}))
		}
	}))
}, module.exports.run = async ({
	event: e,
	api: a
}) => a.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", e.threadID);
