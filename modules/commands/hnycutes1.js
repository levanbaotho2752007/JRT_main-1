module.exports.config = {
  name: "hnycutes1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Random Ảnh của Hny",
  commandCategory: "Phương tiện",
  usages: "duongminhhoang",
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
 "https://i.imgur.com/siRHSij.jpg",
 "https://i.imgur.com/BoGTj7a.jpg",
 "https://i.imgur.com/Sp6YCH3.jpg",
  ];
  var callback = () => api.sendMessage({body:`- Hny Cư Tê s1 - \nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/31.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/31.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/31.jpg")).on("close",() => callback());
   }
;