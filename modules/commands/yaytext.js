module.exports.config = {
    name: "yaytext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SEN",//d?i cl
    description: "yaytext",
    commandCategory: "game",
    usages: "yaytext <n?i dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/à|á|?|?|ã|â|?|?|?|?|?|a|?|?|?|?|?|a/g, `??`)
  .replace(/b/g, `??`)
  .replace(/c/g, `??`)
  .replace(/d|d/g, `??`)
  .replace(/è|é|?|?|?|ê|?|?|?|?|?|e/g, `??`)
  .replace(/f/g, `??`)
  .replace(/g/g, `??`)
  .replace(/h/g, `h`)
  .replace(/i/g, `??`)
  .replace(/ì|í|?|?|i|i/g, `??`)
  .replace(/k/g, `??`)
  .replace(/l/g, `??`)
  .replace(/m/g, `??`)
  .replace(/n/g, `??`)
  .replace(/ò|ó|?|?|õ|ô|?|?|?|?|?|o|?|?|?|?|?|o/g, `??`)
  .replace(/p/g, `??`)
  .replace(/q/g, `??`)
  .replace(/r/g, `??`)
  .replace(/s/g, `??`)
  .replace(/t/g, `??`)
  .replace(/ù|ú|?|?|u|u|?|?|?|?|?|u/g, `??`)
  .replace(/v/g, `??`)
  .replace(/x/g, `??` )
  .replace(/?|ý|?|?|?|y/g, `??`)
  .replace(/w/g, `??`)
  .replace(/z/g, `??`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
}