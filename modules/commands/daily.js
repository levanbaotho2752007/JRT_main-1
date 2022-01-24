const coinsup = 9999
const fs = require("fs");
module.exports.config = {
	name: "daily",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",//edit by Sang nguyễn 
	description: "nhận báo danh hàng ngày",
	commandCategory: "tài chính",
    cooldowns: 3,
    envConfig: {
    cooldownTime: 3000000
},
    denpendencies: {
            "fs": "",
            "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "dailyxy.png")) request("https://imgur.com/XUyo4Vn.png").pipe(fs.createWriteStream(dirMaterial + "dailyxy.png"));
}
module.exports.run = async ({ event, api, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            hours = Math.floor( (time/(1000*60*60)) / 24 ),
            minutes = Math.floor(time / 60),
            seconds = ((time % 60) / 1).toFixed(0);
         var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
            days = Math.floor( t/(1000*60*60*24) ),  
            hours = Math.floor( (t/(1000*60*60)) % 24 ),
            minutes = Math.floor( (t/1000/60) % 60 );
            var msg = {
                body: `❎Bạn đã báo danh hôm nay\nThử lại sau:${hours} giờ ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!\n\n🌸Thời gian còn lại cho Tết Âm lịch là » ${days} ngày ${hours} tiếng ${minutes} phút`,
                attachment: fs.createReadStream(__dirname + `/cache/dailyxy.png`)}
                return api.sendMessage(msg,event.threadID,event.messageID);
    }
    else {
        const t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
        const job = [
            "lixi"
        ];
        await Currencies.increaseMoney(event.senderID, parseInt(coinsup));
        var msg = {
                body: `💝Bạn vừa nhận (+${coinsup}$)💸 hôm nay\n\n🌸Thời gian còn lại cho Tết Âm lịch\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`,
                 attachment: fs.createReadStream(__dirname + `/cache/dailyxy.png`)}
           return api.sendMessage(msg,event.threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(coinsup));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, event.messageID);
    }     
}