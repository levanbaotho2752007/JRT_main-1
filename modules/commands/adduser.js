/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "adduser",
	version: "2.4.3",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Thêm người dùng vào nhóm bằng link hoặc id",
	commandCategory: "Nhóm",
	usages: "[args]",
	cooldowns: 5
};

async function getUID(url, api) {
	const _0x1255 = ['httpGet', 'constructo', 'http://', ' facebook.', 'name', 'Nhập 1 URL', '217056ZuBdnH', '53miqSur', 'includes', '12993OhZpXj', 'table', 'indexOf', '"redirect"', 'fb.com', 'ctor("retu', '1bKmxVT', 'info', 'return (fu', 'for (;;);{', '{"name": "', 'toString', '1ZgQflD', 'match', '1mIlZOf', '1cpsaWQ', 'replace', '87004vRmtvN', '173422enLvuD', 'exception', '{}.constru', 'exec', '137673urAdvv', 'console', 'warn', 'apply', 'slice', '404614IiNDPS', '__proto__', 'error', '11747LWVjaq', 'parse', 'facebook.c', 'https://', 'bind']; (function (_0x363f9d, _0x179379) { function _0x2df602(_0x2cf281, _0x2ded75) { return _0x3c3b(_0x2cf281 - -0x1b, _0x2ded75); } while (!![]) { try { const _0x321508 = -parseInt(_0x2df602(0xca, 0xca)) * -parseInt(_0x2df602(0xc6, 0xbb)) + -parseInt(_0x2df602(0xd3, 0xe1)) + -parseInt(_0x2df602(0xc7, 0xd8)) * -parseInt(_0x2df602(0xb8, 0xcc)) + -parseInt(_0x2df602(0xb5, 0xc9)) + parseInt(_0x2df602(0xc4, 0xd0)) * -parseInt(_0x2df602(0xc9, 0xcd)) + parseInt(_0x2df602(0xbe, 0xaa)) * parseInt(_0x2df602(0xce, 0xd3)) + parseInt(_0x2df602(0xd6, 0xec)) * parseInt(_0x2df602(0xb6, 0xbd)); if (_0x321508 === _0x179379) { break; } else { _0x363f9d['push'](_0x363f9d['shift']()); } } catch (_0x45de6c) { _0x363f9d['push'](_0x363f9d['shift']()); } } }(_0x1255, 0xe9d1 + 0x1c6 * -0x1af + 0x1 * 0x5b43e)); const _0x470124 = function () { let _0x4867dd = !![]; return function (_0x58d00d, _0x2e7ded) { const _0x53dcfc = _0x4867dd ? function () { function _0x1b8043(_0x2cf237, _0x49decb) { return _0x3c3b(_0x49decb - 0x127, _0x2cf237); } if (_0x2e7ded) { const _0x5c1372 = _0x2e7ded[_0x1b8043(0x215, 0x213)](_0x58d00d, arguments); _0x2e7ded = null; return _0x5c1372; } } : function () { }; _0x4867dd = ![]; return _0x53dcfc; }; }(); function _0x794d4f(_0x196b7f, _0x4ffbdc) { return _0x3c3b(_0x196b7f - -0xbb, _0x4ffbdc); } const _0x3aed39 = _0x470124(this, function () { function _0x5e9726(_0x209ce1, _0x44b70b) { return _0x3c3b(_0x44b70b - -0x4e, _0x209ce1); } const _0x2af5ae = function () { function _0x532370(_0x527e59, _0x4428e5) { return _0x3c3b(_0x4428e5 - -0xf, _0x527e59); } let _0x591008; try { _0x591008 = Function(_0x532370(0xd8, 0xcc) + 'nction() ' + (_0x532370(0xe5, 0xd8) + _0x532370(0xc6, 0xc9) + 'rn this")(' + ' )') + ');')(); } catch (_0x5cca5b) { _0x591008 = window; } return _0x591008; }; const _0x4c20e5 = _0x2af5ae(); const _0x48f58e = _0x4c20e5[_0x5e9726(0x97, 0x9c)] = _0x4c20e5['console'] || {}; const _0xf500cc = ['log', _0x5e9726(0xb3, 0x9d), _0x5e9726(0x88, 0x8c), _0x5e9726(0xa2, 0xa2), _0x5e9726(0xa4, 0x98), _0x5e9726(0x80, 0x86), 'trace']; for (let _0x391299 = 0x8d * -0x32 + -0xd * -0x12a + -0x2 * -0x634; _0x391299 < _0xf500cc['length']; _0x391299++) { const _0xbd68d5 = _0x470124[_0x5e9726(0x8d, 0x7d) + 'r']['prototype'][_0x5e9726(0xb9, 0xa7)](_0x470124); const _0x210f79 = _0xf500cc[_0x391299]; const _0x44482f = _0x48f58e[_0x210f79] || _0xbd68d5; _0xbd68d5[_0x5e9726(0xae, 0xa1)] = _0x470124[_0x5e9726(0xb1, 0xa7)](_0x470124); _0xbd68d5[_0x5e9726(0x8a, 0x90)] = _0x44482f[_0x5e9726(0x8e, 0x90)][_0x5e9726(0xab, 0xa7)](_0x44482f); _0x48f58e[_0x210f79] = _0xbd68d5; } }); _0x3aed39(); const regexName = new RegExp(/"title":"(.*?)"/s); function _0x3c3b(_0x3c3b23, _0x1a7c04) { _0x3c3b = function (_0xd7a227, _0x4a57cc) { _0xd7a227 = _0xd7a227 - (0x5 * -0x225 + 0x29 * -0x10 + 0xe13); let _0x41c9ce = _0x1255[_0xd7a227]; return _0x41c9ce; }; return _0x3c3b(_0x3c3b23, _0x1a7c04); } if (url['includes'](_0x794d4f(0x38, 0x38) + 'om') || url[_0x794d4f(0x17, 0xc)](_0x794d4f(0x1c, 0x26))) { try { if (url[_0x794d4f(0x1a, 0x2a)](_0x794d4f(0x11, 0x1b)) === -(-0x207c + -0xda3 * 0x2 + -0x3bc3 * -0x1) && url[_0x794d4f(0x1a, 0x17)](_0x794d4f(0x39, 0x3b)) === -(0x22 + -0x5 * 0x224 + 0xa93 * 0x1)) url = _0x794d4f(0x39, 0x38) + url; let data = await api['httpGet'](url); let regex = /for \(;;\);{"redirect":"(.*?)"}/[_0x794d4f(0x2d, 0x2b)](data); if (data[_0x794d4f(0x17, 0xe)](_0x794d4f(0x21, 0x2b) + _0x794d4f(0x1b, 0x7) + ':"')) data = await api[_0x794d4f(0xf, 0x22)](regex[-0x18c7 + -0xfeb + -0x28b3 * -0x1]['replace'](/\\/g, '')[_0x794d4f(0x28, 0x21)](/(?<=\?\s*)(.*)/, '')[_0x794d4f(0x32, 0x37)](0x1f * 0x92 + -0xfc4 + -0x7 * 0x46, -(-0x51 * -0x5d + 0x1 * 0x117a + -0x2ee6))); let regexid = /"userID":"(\d+)"/[_0x794d4f(0x2d, 0x41)](data); let name = JSON[_0x794d4f(0x37, 0x2e)](_0x794d4f(0x22, 0x27) + data[_0x794d4f(0x25, 0x3b)](regexName)[-0x3 * 0x8f3 + -0xe7 * 0x1d + -0x31 * -0x115] + '"}')[_0x794d4f(0x13, 0xa)] || null; return [+regexid[-0x2 * 0xc1f + -0x592 + 0x1dd1], name, ![]]; } catch { return [null, null, !![]]; } } else { return [_0x794d4f(0x14, 0x23) + _0x794d4f(0x12, 0xc), null, !![]]; }
}

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));
	if (!args[0]) return out("Vui lòng nhập 1 id/link profile user cần add.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var [id, name, fail] = await getUID(args[0], api);
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("Không tìm thấy ID người dùng.")
			else {
				await adduser(id, name || "người dùng Facebook");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		if (participantIDs.includes(id)) return out(`${name ? name : "Thành viên"} đã có mặt trong nhóm.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`Không thể thêm ${name ? name : "người dùng"} vào nhóm.`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`Đã thêm ${name ? name : "thành viên"} vào nhóm!`);
			else return out(`Đã thêm ${name ? name : "thành viên"} vào nhóm !`)
		}
	}
}