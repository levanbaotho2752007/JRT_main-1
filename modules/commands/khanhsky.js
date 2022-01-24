module.exports.config = {

	name: "khanhsky",

	version: "1.0.1",
	hasPermssion: 0,
	credits: "MewMew mod By hungdz30cm",
	description: "Comment trên bảng ( ͡° ͜ʖ ͡°)",
	commandCategory: "general",
	usages: "khanhsky [text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
   if(!fs.existsSync(__dirname+'/cache/AlegreyaSans-Regular.ttf')) { 
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1cXbgV7NmlDKYNb-ygBDGHl4EBVKPuUKm&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname+"/cache/AlegreyaSans-Regular.ttf", Buffer.from(getfont, "utf-8"));
      };   
	let pathImg = __dirname + '/cache/khanhsky.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("Nhập nội dung comment trên bảng", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgur.com/fM4xj2W.png`, { responseType: 'arraybuffer' })).data;
  const Canvas = global.nodemodule["canvas"];
	Canvas.registerFont(__dirname+`/cache/AlegreyaSans-Regular.ttf`, {
        family: "AlegreyaSans"
    });
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "400 45px AlegreyaSans";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 45;
	while (ctx.measureText(text).width > 1300) {
		fontSize--;
		ctx.font = `400 ${fontSize}px AlegreyaSans, sans-serif`;
	}
	const lines = await this.wrapText(ctx, text, 400);
	ctx.fillText(lines.join('\n'), 60,668);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}
