module.exports.config = {
  name: "tid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Other",
  usages: "tid",
  cooldowns: 5,
  dependencies: []
};

module.exports.run = async({api, event, Threads }) => {
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  var namethread = datathread.threadName;// mod By DMHoang
 return api.sendMessage(`Tên nhóm: ${namethread}\nID của nhóm:\n${event.threadID}`, event.threadID, event.messageID);
}