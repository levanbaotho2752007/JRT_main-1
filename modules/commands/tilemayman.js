module.exports.config = {
 name: "tilemayman",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "",
 description: "Tỉ lệ may mắn của bạn",
 commandCategory: "Giải trí", 
 usages: "", 
 cooldowns: 0,
 dependencies: {
   "request": "",
   "fs-extra":"",
   "axios":""
}};
module.exports.run = async function({ api, event, Users }) {
    var tle = Math.floor(Math.random() * 101);
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/kzWYNJo.png"
   ];
    var callback = () => api.sendMessage({body:`Tỉ lệ may mắn của bạn là: ${tle}%`,
    attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
 }