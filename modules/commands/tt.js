module.exports.config = {
  name: "tt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng",///đổi đi bạn à?
  description: "v2 của info",
  commandCategory: "Thông Tin",
  usages: "[reply/id]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, args, client, Users, __GLOBAL,Currencies}) => {
var _0x489e=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x48\x6F\xE0\x6E\x67","\u0111\u1ED5\x69\x20\x63\x72\x65\u0111\x69\x74\x20\x63\x6F\x6E\x20\x63\u1EB7\x63\x20\xE0\x3F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x61\x78\x69\x6F\x73","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x72\x65\x71\x75\x65\x73\x74","\x66\x73\x2D\x65\x78\x74\x72\x61"];if(this[_0x489e[1]][_0x489e[0]]!= _0x489e[2]){return api[_0x489e[6]](`${_0x489e[3]}`,event[_0x489e[4]],event[_0x489e[5]])};const axios=global[_0x489e[8]][_0x489e[7]];const request=global[_0x489e[8]][_0x489e[9]];const fs=global[_0x489e[8]][_0x489e[10]]
 try {

if(event.type == "message_reply") { 
 let mention = event.messageReply.senderID

let data = await api.getUserInfo(mention);
    let url = data[mention].profileUrl;
    let b = data[mention].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[mention].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[mention].vanity;
    let q = data[mention].searchTokens;
    let k = (await Currencies.getData(mention)).money;
    let i = data[mention].isVerified;
    let name = await data[mention].name;
    var sex = await data[mention].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `👀 Tên: ${name}\n🐒 UID: ${mention}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô.` , attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(`https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
 
  var iduser = args.join(' ');
let data = await api.getUserInfo(iduser);

let url = data[iduser].profileUrl;
    let b = data[iduser].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[iduser].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[iduser].vanity;
    let q = data[iduser].searchTokens;
    let k = (await Currencies.getData(iduser)).money;
    let i = data[iduser].isVerified;
    let name = await data[iduser].name;
    var sex = await data[iduser].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body:`👀 Tên: ${name}\n🐒 UID: ${iduser}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô.` ,  attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(`https://graph.facebook.com/${iduser}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch (e) {
    api.sendMessage(`Ko có thông tin trên sever bot\nNên ko thể get tt của người dùng này`,event.threadID,event.messageID);
 }
}