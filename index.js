// 以下代码摘自qqface
// https://github.com/fritx/qqface

// 摘自smartQQ 压缩后的js代码
// http://pub.idqqimg.com/smartqq/js/mq.js
// face对应的text
var textMaps = [["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极","双喜","鞭炮","灯笼","发财","K歌","购物","邮件","帅","喝彩","祈祷","爆筋","棒棒糖","喝奶","下面","香蕉","飞机","开车","左车头","车厢","右车头","多云","下雨","钞票","熊猫","灯泡","风车","闹钟","打伞","彩球","钻戒","沙发","纸巾","药","手枪","青蛙"],["Smile","Grimace","Drool","Scowl","CoolGuy","Sob","Shy","Silent","Sleep","Cry","Awkward","Angry","Tongue","Grin","Surprise","Frown","Ruthless","Blush","Scream","Puke","Chuckle","Joyful","Slight","Smug","Hungry","Drowsy","Panic","Sweat","Laugh","Commando","Determined","Scold","Shocked","Shhh","Dizzy","Tormented","Toasted","Skull","Hammer","Wave","Speechless","NosePick","Clap","Shame","Trick","Bah! L","Bah! R","Yawn","Pooh-pooh","Shrunken","TearingUp","Sly","Kiss","Wrath","Whimper","Cleaver","Watermelon","Beer","Basketball","PingPong","Coffee","Rice","Pig","Rose","Wilt","Lips","Heart","BrokenHeart","Cake","Lightning","Bomb","Dagger","Soccer","Ladybug","Poop","Moon","Sun","Gift","Hug","Strong","Weak","Shake","Peace","Fight","Beckon","Fist","Pinky","RockOn","NO","OK","InLove","Blowkiss","Waddle","Tremble","Aaagh","Twirl","Kotow","Dramatic","JumpRope","Surrender","Exciting","HipHot","ShowLove","Tai Chi L","Tai Chi R","Congratulations","Firecracker","Lantern","Richer","Karaoke","Shopping","Email","Handsome","Cheers","Pray","BlowUp","Lolly","Milk","Noodles","Banana","Plane","Car","Locomotive","Train","Train Tail","Cloudy","Rain","Dollor","Panda","Bulb","Windmill","Clock","Umbrella","Balloon","Ring","Sofa","toiletPaper","Pill","Pistol","Frog"]]

// 以下是：针对当前应用具体情况 微调QQ表情协议
function adjustForWechat(){
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
	  '发财': '發'
	}
	var newToOldEn = {
	  'Richer': 'Rich',
	  'Strong': 'ThumbsUp',
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
adjustForWechat()

exports.textMaps = textMaps

exports.textFromIndex = textFromIndex
exports.indexFromText = indexFromText

exports.imgFromIndex = imgFromIndex

function imgFromIndex(index, type){
	type = type || 'png' // 默认png
	if (index > 104) type = 'gif' // gif兜底
	return 'https://unpkg.com/qqface@0.1.2/img/' + index+'.'+type
}

function textFromIndex(index, lang){
	var textMapIndex = textMapIndexFromLang(lang)
	var textMap = textMaps[textMapIndex]
	var text = textMap[index]
	if (!text) { // lang fallback
		var theOtherMap = textMaps[(textMapIndex + 1) % 2]
		index = theOtherMap[index]
	}
	return text
}
function indexFromText(text, lang){
	var textMapIndex = textMapIndexFromLang(lang)
	var textMap = textMaps[textMapIndex]
	var index = textMap.indexOf(text)
	if (index < 0) { // lang fallback
		var theOtherMap = textMaps[(textMapIndex + 1) % 2]
		index = theOtherMap.indexOf(text)
	}
	return index
}

// lang默认zh-CN 可传入en
function textMapIndexFromLang(lang){
	lang = /^en/.test(lang) ? 'en' : 'zh-CN'
	return lang === 'en' ? 1 : 0
}
