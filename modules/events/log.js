module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const logger = require("../../utils/log");
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | D/MM/YYYY");
    const time = process.uptime(),
		  hours = Math.floor(time / (60 * 60)),
		  minutes = Math.floor((time % (60 * 60)) / 60),
		  seconds = Math.floor(time % 60);

    var datathread = (await Threads.getData(event.threadID)).threadInfo; // get name box By DMHoang
      var namethread = datathread.threadName; // get name box By DMHoang
    var name = (await Users.getData(event.author)).name // get name user By DMHoang
    if (!global.configModule[this.config.name].enable) return;

    var formReport =  "⚠️⚠️「 𝕋ℍ𝕆̂ℕ𝔾 𝔹𝔸́𝕆 」⚠️⚠️" +
                        "\n\n📣𝐻𝑎̀𝑛ℎ đ𝑜̣̂𝑛𝑔: {task}" +
                        "\n⏰𝑉𝑎̀𝑜 𝑙𝑢́𝑐: " + gio +
                        "\n⚡𝑈𝑝𝑡𝑖𝑚𝑒:  " + "[ " + hours + " : " + minutes + " : " + seconds + " ]" +
                        "\n👑𝑇𝑒̂𝑛 𝑛ℎ𝑜́𝑚:\n" +"「 "+ namethread + " 」" + // add name box By DMHoang
                        "\n🧬𝐼𝐷: " + event.threadID +
                        "\n🔎𝑇𝑒̂𝑛: " + name + // add name user By DMHoang
                        "\n📌𝐿𝑖𝑛𝑘 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘:\nwww.facebook.com/" + event.author,
        task = "";
    switch (event.logMessageType) {
        /*case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Tên không tồn tại",
                    newName = event.logMessageData.name || "Tên không tồn tại";
            task = "Người dùng thay đổi tên nhóm từ: '" + oldName + "' thành '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }*/
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "𝑇ℎ𝑒̂𝑚 𝑏𝑜𝑡 ✅";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "𝐾𝑖𝑐𝑘 𝑏𝑜𝑡 ❌"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
    
  var idad = global.config.ADMINBOT;
    for(let ad of idad) {
    return api.sendMessage(formReport, ad, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
  }
}