module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DMH",
  description: "Thông tin Admin DMH",
  commandCategory: "Phương tiện",
  usages: "",
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
 "https://imgur.com/V70kW9C.jpg",
 "https://imgur.com/MgwMWMU.jpg",
  ];
  var callback = () => api.sendMessage({body:`\n★Thông Tin Admin Bot★\nAdmin name : Lê Văn Bảo Thọ\nBiệt Danh: Thọ Goodboy\nGiới Thiệu: Nhà anh không có gì ngoài hàng chục chiếc xe đạp riêng.\nI Have Something To You\nI Love You\nTính Cách : Hiền lành - tốt tính\nChiều cao : 1m65\nSinh ngày : 27/05/2007\nLiên hệ: 0888409469\nInstagram: null\nTikTok: null\nSở Thích: Nhắn tin với người thân :3\nCân nặng: 50kg\nID FACEBOOK : 100046745231201\nName ID : Lê Văn Bảo Thọ \nLink Facebook : https://www.facebook.com/ProFile.btho\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu\nChúc bạn sử dụng vui vẻ <3\n=== Lê Văn Bảo Thọ ===\nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;