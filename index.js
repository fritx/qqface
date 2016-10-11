
// 摘自smartQQ 压缩后的js代码
// http://pub.idqqimg.com/smartqq/js/mq.js
// face对应的text
var textMaps = [["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极","双喜","鞭炮","灯笼","发财","K歌","购物","邮件","帅","喝彩","祈祷","爆筋","棒棒糖","喝奶","下面","香蕉","飞机","开车","左车头","车厢","右车头","多云","下雨","钞票","熊猫","灯泡","风车","闹钟","打伞","彩球","钻戒","沙发","纸巾","药","手枪","青蛙"],["Smile","Grimace","Drool","Scowl","CoolGuy","Sob","Shy","Silent","Sleep","Cry","Awkward","Angry","Tongue","Grin","Surprise","Frown","Ruthless","Blush","Scream","Puke","Chuckle","Joyful","Slight","Smug","Hungry","Drowsy","Panic","Sweat","Laugh","Commando","Determined","Scold","Shocked","Shhh","Dizzy","Tormented","Toasted","Skull","Hammer","Wave","Speechless","NosePick","Clap","Shame","Trick","Bah! L","Bah! R","Yawn","Pooh-pooh","Shrunken","TearingUp","Sly","Kiss","Wrath","Whimper","Cleaver","Watermelon","Beer","Basketball","PingPong","Coffee","Rice","Pig","Rose","Wilt","Lips","Heart","BrokenHeart","Cake","Lightning","Bomb","Dagger","Soccer","Ladybug","Poop","Moon","Sun","Gift","Hug","Strong","Weak","Shake","Peace","Fight","Beckon","Fist","Pinky","RockOn","NO","OK","InLove","Blowkiss","Waddle","Tremble","Aaagh","Twirl","Kotow","Dramatic","JumpRope","Surrender","Exciting","HipHot","ShowLove","Tai Chi L","Tai Chi R","Congratulations","Firecracker","Lantern","Richer","Karaoke","Shopping","Email","Handsome","Cheers","Pray","BlowUp","Lolly","Milk","Noodles","Banana","Plane","Car","Locomotive","Train","Train Tail","Cloudy","Rain","Dollor","Panda","Bulb","Windmill","Clock","Umbrella","Balloon","Ring","Sofa","toiletPaper","Pill","Pistol","Frog"]]

// face对应的code
// index代表的则是 表情选择器上的顺序
// var codeMapB = [14,1,2,3,4,5,6,7,8,9,10,11,12,13,0,15,16,96,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,89,113,114,115,60,61,46,63,64,116,66,67,53,54,55,56,57,117,59,75,74,69,49,76,77,78,79,118,119,120,121,122,123,124,42,85,43,
// 41,86,125,126,127,128,129,130,131,132,133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]
var codeMap = [14,1,2,3,4,5,6,7,8,9,10,11,12,13,0,50,51,96,53,54,73,74,75,76,77,78,55,56,57,58,79,80,81,82,83,84,85,86,87,88,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,32,113,114,115,63,64,59,33,34,116,36,37,38,91,92,93,29,117,72,45,42,39,62,46,47,71,95,118,119,120,121,122,123,124,27,21,23,25,26,125,126,127,
128,129,130,131,132,133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]

// var sysfaceMap = [14,1,2,3,4,5,6,7,8,9,10,11,12,13,0,15,16,96,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,89,113,114,115,60,61,46,63,64,116,66,67,53,54,55,56,57,117,59,75,74,69,49,76,77,78,79,118,119,120,121,122,123,124,42,85,43,
// 41,86,125,126,127,128,129,130,131,132,133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]
// 125 <=> 131 调换顺序
var sysfaceMap = [14,1,2,3,4,5,6,7,8,9,10,11,12,13,0,15,16,96,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,89,113,114,115,60,61,46,63,64,116,66,67,53,54,55,56,57,117,59,75,74,69,49,76,77,78,79,118,119,120,121,122,123,124,42,85,43,
41,86,131,126,127,128,129,130,125,132,133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]

function adjustForGT(){
	// 新版qq 表情名称有变化
	// 回退到旧的名称 与移动端保持统一
	var newToOld = {
	  '可爱': '愉快',
	  '大兵': '悠闲',
	  '折磨': '疯了',
	  // '乒乓': '乒乓球',
	  // '示爱': '嘴唇',
	  '转圈': '街舞', // 调换顺序
	  '街舞': '转圈',
	  // '挥手': '投降'
	}
	var newToOldEn = {
	  'Twirl': 'HipHot', // 调换顺序
	  'HipHot': 'Twirl'
	}

	textMaps[0].forEach(function(text, index, list){
	  var oldText = newToOld[text]
	  if (oldText) list[index] = oldText
	})
	textMaps[1].forEach(function(text, index, list){
	  var oldText = newToOldEn[text]
	  if (oldText) list[index] = oldText
	})
}
adjustForGT()

exports.textMaps = textMaps
exports.codeMap = codeMap
exports.sysfaceMap = sysfaceMap

exports.indexFromCode = indexFromCode
exports.codeFromIndex = codeFromIndex
exports.textFromIndex = textFromIndex
exports.indexFromText = indexFromText
exports.textFromCode = textFromCode
exports.codeFromText = codeFromText


function indexFromCode(code){
	var index = codeMap.indexOf(code)
	return index
}
function codeFromIndex(index){
	var code = codeMap[index]
	return code
}

function textFromIndex(index, lang){
	var text = textMapFromLang(lang)[index]
	return text
}
function indexFromText(text, lang){
	var index = textMapFromLang(lang).indexOf(text)
	return index
}

function textFromCode(code, lang){
	var index = indexFromCode(code)
	var text = textFromIndex(index, lang)
	return text
}
function codeFromText(text, lang){
	var index = indexFromText(text, lang)
	var code = codeFromIndex(index)
	return code
}


// lang默认zh-CN 可传入en
function textMapFromLang(lang){
	lang = /^en/.test(lang) ? 'en' : 'zh-CN'
	var b = lang === 'en' ? 1 : 0
	return textMaps[b]
}

