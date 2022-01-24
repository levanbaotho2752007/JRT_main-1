/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "bịp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DMH",
  description: "Random Ảnh Nude Gái Xinh Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "nsfw",
  usages: "nude",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/TElbKkl.mp4",
"https://i.imgur.com/TElbKkl.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 300 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`Muốn gái là gái hả`,attachment: fs.createReadStream(__dirname + "/cache/9.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/9.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/9.mp4")).on("close",() => callback());
   }
};