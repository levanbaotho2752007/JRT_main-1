module.exports.config = {
	name: "tikvideo2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mày",
	description: "Tải video tik tok xóa logo",
	commandCategory: "Tiện ích",
	usages: "[Link video tik tok]",
	cooldowns: 10,
	dependencies: {
		"axios": "",
		"fs-extra": ""
	}
	
};
module.exports.run = async function({ api, event, args,}) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args.join("") != " " ){ return api.sendMessage("Bạn phải nhập url video tiktok !!!", event.threadID, event.messageID);}
  var uid = args[0];
  try {
	const options = {
		method: 'GET',
		url: 'https://video-nwm.p.rapidapi.com/url/',
		params: {url: `\'${uid}\'`},
		headers: {
		  'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0',
		  'x-rapidapi-host': 'video-nwm.p.rapidapi.com'
		}
	  };
	  var data = await axios.request(options);
	  if(data.data.item.video.playAddr[0] == undefined ) get = data.data.item.video.playAddr
	  else get = data.data.item.video.playAddr[0]
	  pathus = __dirname+`/cache/${event.threadID}-${event.senderID}.mp4`  
	  var getms = (await axios.get(get,{responseType: "arraybuffer"})).data; 
	  fs.writeFileSync(pathus, Buffer.from(getms, "utf-8"));
	  console.log(get);
	  if (fs.statSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`), event.messageID);
	  else return api.sendMessage({body : "Đã xong cho bạn này ✅" , attachment: fs.createReadStream(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`), event.messageID)
	 
		}catch {
			return api.sendMessage('Không thể xử lý yêu cầu của bạn!', event.threadID, event.messageID);
		};
 }
