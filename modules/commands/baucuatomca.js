module.exports.config = {
    name: "baucuatomca",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "Trò chơi dân gian vào mùa tết",
    commandCategory: "Game",
    usages: "[số tiền cần đặt]",
    cooldowns: 7,
};

module.exports.languages = {
    "vi": {
        "missingInput": "[ Bầu cua tôm cá ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ Bầu cua tôm cá ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!",
        "limitBet": "[ Bầu cua tôm cá ] Số coin đặt không được dưới 500$!",
        "returnWin": "🎲 %1 | %2 | %3 🎲\nBạn đã thắng với %4$",
        "returnLose": "🎲 %1 | %2 | %3 🎲\nBạn đã thua và số tiền sẽ được chuyển về nhà cái"
    },
    "en": {
        "missingInput": "[ Bầu cua tôm cá ] The bet money must not be blank or a negative number",
        "moneyBetNotEnough": "[ Bầu cua tôm cá ] The money you betted is bigger than your balance!",
        "limitBet": "[ SLOT ] Your bet is too low, the minimum is 50$",
        "returnWin": "🎲 %1 | %2 | %3 🎲\nYou won with %60$",
        "returnLose": "🎲 %1 | %2 | %3 🎲\nYou lost and loss %20$"
    }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["🐓", "🦌", "🐟", "🦞", "🦀", "🍐"];
    const moneyUser = (await getData(senderID)).money;

    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
	if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
	if (moneyBet < 500) return api.sendMessage(getText("limitBet"), threadID, messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(getText("returnWin", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await increaseMoney(senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(getText("returnLose", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await decreaseMoney(senderID, moneyBet);
            break;
        }
    }
}