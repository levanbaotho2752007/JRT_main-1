module.exports.config = {
    name: "instagram",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Lấy info người dùng instagram thông qua username",
    commandCategory: "Thông tin",
    usages: "[username]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
(function (_0x3ffe6e, _0x3d08eb) {
    function _0x1ab11e(_0x3750a8, _0x1fcad3) {
        return _0x4da4(_0x3750a8 - '0x196', _0x1fcad3);
    }
    var _0x5f2e2b = _0x3ffe6e();
    while (!![]) {
        try {
            var _0x144be9 = -parseInt(_0x1ab11e('0x327', 0x32c)) / 0x1 * (parseInt(_0x1ab11e(0x31a, 0x32c)) / 0x2) + -parseInt(_0x1ab11e('0x31e', 0x30d)) / 0x3 * (-parseInt(_0x1ab11e('0x316', '0x325')) / 0x4) + -parseInt(_0x1ab11e('0x32e', 0x33c)) / 0x5 + parseInt(_0x1ab11e('0x323', '0x339')) / 0x6 + parseInt(_0x1ab11e(0x317, '0x326')) / 0x7 * (parseInt(_0x1ab11e(0x31d, '0x31d')) / 0x8) + -parseInt(_0x1ab11e(0x311, 0x306)) / 0x9 * (-parseInt(_0x1ab11e('0x333', '0x31d')) / 0xa) + -parseInt(_0x1ab11e('0x30e', 0x304)) / 0xb;
            if (_0x144be9 === _0x3d08eb) break;
            else _0x5f2e2b['push'](_0x5f2e2b['shift']());
        } catch (_0x2d023c) {
            _0x5f2e2b['push'](_0x5f2e2b['shift']());
        }
    }
}(_0x55f1, 0xe3878));

function _0x55f1() {
    var _0x3aa158 = ['📝Bạn phải nhập username instagram', '347931UADcIg', 'from', 'threadID', 'unlinkSync', '\x0a💟Follow: ', '282468VxnbUP', '108997FVJxXb', 'arraybuffer', 'request', '33532CAsaTS', 'biography', '.png', '168pCeLZL', '3tlyslI', 'fs-extra', 'full_name', 'GET', 'https://instagram-data1.p.rapidapi.com/user/info', '2045064pYkBFf', 'axios', '\x0a🔰Username: ', 'writeFileSync', '15LMPuQt', 'edge_followed_by', '❌Không thể lấy thông tin từ username!!!', 'utf-8', '🔮INSTAGRAM\x0a🐳Name: ', 'get', '\x0a💕Following: ', '1837020UnKzPq', 'messageID', 'senderID', 'data', 'edge_follow', '310YlCgXK', 'instagram-data1.p.rapidapi.com', 'sendMessage', 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0', 'profile_pic_url_hd', '/cache/', '\x0a🦋Bio: ', 'username', 'createReadStream', '4246297ApKXNC', 'nodemodule'];
    _0x55f1 = function () {
        return _0x3aa158;
    };
    return _0x55f1();
}
const axios = global['nodemodule'][_0x68ad94('0x4cd', 0x4d9)];

function _0x68ad94(_0x1a95f2, _0x549657) {
    return _0x4da4(_0x1a95f2 - '0x33f', _0x549657);
}
const fs = global[_0x68ad94('0x4b8', 0x4ca)][_0x68ad94(0x4c8, 0x4d3)];
if (!args[0x0]) return api[_0x68ad94(0x4b0, 0x4a2)](_0x68ad94('0x4b9', '0x4c6'), event[_0x68ad94('0x4bc', '0x4cc')], event[_0x68ad94('0x4d8', '0x4cc')]);

function _0x4da4(_0x507b06, _0x35a23d) {
    var _0x55f168 = _0x55f1();
    return _0x4da4 = function (_0x4da41b, _0x2fb8cf) {
        _0x4da41b = _0x4da41b - 0x171;
        var _0x46ec12 = _0x55f168[_0x4da41b];
        return _0x46ec12;
    }, _0x4da4(_0x507b06, _0x35a23d);
}
const link = args[0x0];
try {
    const options = {
        'method': _0x68ad94('0x4ca', 0x4c1),
        'url': _0x68ad94('0x4cb', 0x4db),
        'params': {
            'username': '' + link
        },
        'headers': {
            'x-rapidapi-host': _0x68ad94('0x4dd', '0x4e8'),
            'x-rapidapi-key': _0x68ad94('0x4b1', '0x4ad')
        }
    };
    var data = await axios[_0x68ad94(0x4c2, '0x4b4')](options),
        data1 = data['data'],
        tieusu = data1[_0x68ad94('0x4c4', 0x4ae)],
        name = data1[_0x68ad94(0x4c9, 0x4c9)],
        id = data1['id'],
        username = data1[_0x68ad94('0x4b5', 0x4c6)],
        follow = data1[_0x68ad94(0x4d1, 0x4dd)]['count'],
        following = data1[_0x68ad94('0x4db', 0x4e8)]['count'],
        picture = data1[_0x68ad94(0x4b2, 0x4a4)];
    pathus = __dirname + (_0x68ad94(0x4b3, 0x4ad) + event[_0x68ad94(0x4d9, '0x4e8')] + _0x68ad94('0x4c5', 0x4af));
    var videotik = (await axios[_0x68ad94(0x4d5, 0x4c6)](picture, {
        'responseType': _0x68ad94('0x4c1', '0x4bc')
    }))[_0x68ad94(0x4da, '0x4ca')];
    return fs[_0x68ad94('0x4cf', '0x4db')](pathus, Buffer[_0x68ad94('0x4bb', '0x4c2')](videotik, _0x68ad94(0x4d3, '0x4e9'))), api[_0x68ad94(0x4b0, '0x4ad')]({
        'body': _0x68ad94(0x4d4, 0x4c6) + name + _0x68ad94('0x4b4', '0x4c6') + tieusu + _0x68ad94(0x4ce, 0x4b8) + username + '\x0a👀ID: ' + id + _0x68ad94('0x4be', 0x4b9) + follow + _0x68ad94(0x4d6, '0x4e2') + following,
        'attachment': fs[_0x68ad94(0x4b6, '0x4b7')](__dirname + ('/cache/' + event[_0x68ad94(0x4d9, '0x4de')] + _0x68ad94(0x4c5, 0x4bd)))
    }, event['threadID'], () => fs[_0x68ad94(0x4bd, '0x4c6')](__dirname + (_0x68ad94('0x4b3', '0x49f') + event[_0x68ad94('0x4d9', 0x4e6)] + _0x68ad94(0x4c5, 0x4c3))), event['messageID']);
} catch {
    return api[_0x68ad94(0x4b0, 0x4a9)](_0x68ad94(0x4d2, 0x4c6), event[_0x68ad94('0x4bc', 0x4a6)], event[_0x68ad94(0x4d8, 0x4c2)]);
}
}