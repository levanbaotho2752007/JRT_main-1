module.exports.config = {
  name: "chucmung",
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
return api.sendMessage( `Đây là Bot của Hoàng 👾\n🔰Chúc bạn ngày 20-10 vui vẻ\n\n🌟。❤。🍀。💥。🍸。🎉\n。 🍸。🎉。✨ 。🎉。🌟\n💫。✨。＼ ｜ ／。🍸。🎉\n ℍ𝕒𝕡𝕡𝕪        𝟚𝟘-𝟙𝟘        𝕍𝕦𝕚 𝕍𝕖\n💫。🌟。／ ｜ ＼。🍸。🍻\n。🍀。 🍸。🎉。✨ 。🎉\n🌟。💫。🎶。❤。💥。🎉\n\n📩Mọi thắc mắc liên hệ Admin Bot \n📱Fb : https://fb.me/duonghoang.at147 🍑🍒🦋\n📝Thính: 🍑🍒🦋`, event.threadID);
  var link = [
 "https://i.imgur.com/pxr7BTW.jpg",
 "https://i.imgur.com/3i683op.jpg",
  ];
  var callback = () => api.sendMessage({body:`\n★Thông Tin Admin Bot★\nAdmin name : 𝕯𝖚̛𝖔̛𝖓𝖌 𝕸𝖎𝖓𝖍 𝕳𝖔𝖆̀𝖓𝖌\nBiệt Danh: Hoang Goodboy\nGiới Thiệu: Nhà anh không có gì ngoài hàng chục chiếc xe đạp riêng.\nI Have Something To You\nI Love You\nTính Cách : Hiền lành - tốt tính\nChiều cao : 1m75\nSinh ngày : null\nLiên hệ: null\nInstagram: hung_pcy\nTikTok: null\nSở Thích: Nhắn tin với người thân :3\nCân nặng: 60kg\nID FACEBOOK : null\nName ID : Dương Minh Hoàng \nLink Facebook : https://www.facebook.com/nghhth\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu\nChúc bạn sử dụng vui vẻ <3\n=== Dương Minh Hoàng ===\nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.senderID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;