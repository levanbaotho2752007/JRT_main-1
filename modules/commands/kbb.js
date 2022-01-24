module.exports.config = {
    name: "kbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra//mod by Jukie
    description: "búa bao kéo",
    commandCategory: "Giải trí",
    usages: "[tag]",
    cooldowns: 0,
    dependencies: {
    }
};
module.exports.run = async ({ event, api, args, Currencies,Users,Threads }) => {
          var data = await Currencies.getData(event.senderID);
          var money = data.money           
    if(!args[0]) {
         api.sendMessage(`⚡️Vui lòng nhập 'kéo' hoặc 'búa' hoặc 'bao'`,event.threadID,event.messageID)
    }
    else{
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[0];
          const coins = args[1];
          if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 50) return api.sendMessage("⚡️Mức đặt cược của bạn không phải là một con số hoặc mức đặt cược của bạn bé hơn 50$", event.threadID,event.messageID);
          else{
          if(money < args[1])  
          api.sendMessage(`⚡️Số dư bạn không đủ ${coins}$ để có thể chơi`,event.threadID,event.messageID);
          else {           
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              api.sendMessage(`⚡️Hòa\nUser : ${userturn}\nBot : ${botturn}\nHòa, số dư không thay đổi`,event.threadID,event.messageID)

            } if (userturn == "kéo") {
              if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money -coins})

                api.sendMessage(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$`,event.threadID,event.messageID)
                
              } if (botturn == "✋") {
                
                await Currencies.increaseMoney(event.senderID, parseInt(coins)); 
                api.sendMessage(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$`,event.threadID,event.messageID)                
            }
          } else if (userturn == "búa") {
            if (botturn == "✋") {
              Currencies.setData(event.senderID, options = {money: money -coins})
              api.sendMessage(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$`,event.threadID,event.messageID)                 
              
            } if (botturn == "✌️") {
                await Currencies.increaseMoney(event.senderID, parseInt(coins));  
              api.sendMessage(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$`,event.threadID,event.messageID)        
          }
        } else if (userturn == "bao") {
          if (botturn == "✌️") {
            Currencies.setData(event.senderID, options = {money: money -coins})
             api.sendMessage(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$`,event.threadID,event.messageID)        
          } if (botturn == "👊") {
                await Currencies.increaseMoney(event.senderID, parseInt(coins));  
             api.sendMessage(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$`,event.threadID,event.messageID)        
        }
      }
    }
        } 
      }
    }
}