module.exports.config = {
    name: "singmax",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát video thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Phương tiện",
    usages: "[searchVideos]",
    cooldowns: 10
};
module.exports.run = async function ({
    api,
    event,
    args
}) {
    const axios = require('axios')
    const fs = require("fs-extra");
    const request = require("request");
        var url = args.join(" ");
        try {
        const result = (await axios.get(`https://www.phamvandienofficial.xyz/videodowload?url=${url}`)).data;
        path1 = __dirname + `/cache/1111111111111.m4a`
        console.log(result)
        const link = result.data.medias[3].url
        console.log(link)
        const getms = (await axios.get(link, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
        console.log(11111111111111)
        if (fs.statSync(path1).size > 26000000) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/1111111111111.m4a`), event.messageID);
        else
        console.log(222222222222)
         return api.sendMessage({
            body: `» ${result.data.title}`,
            attachment: fs.createReadStream(path1)
        }, event.threadID, () => fs.unlinkSync(path1), event.messageID)
        } catch(e) {
          console.log(e)
        }
}