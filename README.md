# qqface

经典QQ表情/文字替换 已应用于[qqlog](https://github.com/fritx/qqlog)<br>
*版本0.1.x新增了png/gif图片目录*

注意最新版本0.2.x 移除了部分api 移除了本地图片文件 改为使用cdn网络图片<br>
如果你想要查看0.1.x版本 或是需要QQ表情本地文件 请查看[0.1.x](https://github.com/fritx/qqface/tree/0.1.x)

这是一个底层依赖 如果你想要的是 完整的文本解析/替换函数 请查看[qtext-parse](https://github.com/we-digest/qtext-parse)

```sh
npm install --save qqface@next
# 或者
npm install --save qqface@0.2.0-alpha.1
```

```js
var qqface = require('qqface')

qqface.textFromIndex(0)
qqface.textFromIndex(0, 'zh')
//=> '微笑'

qqface.textFromIndex(0, 'en')
//=> 'Smile'

// lang参数可选 有fallback
qqface.indexFromText('委屈')
qqface.indexFromText('委屈', 'en')
qqface.indexFromText('委屈', 'zh')
qqface.indexFromText('Shrunken')
qqface.indexFromText('Shrunken', 'en')
qqface.indexFromText('Shrunken', 'zh')
//=> 49
```

```js
// 默认png 注意 仅支持 0.png ~ 104.png
qqface.imgFromIndex(104, 'png')
qqface.imgFromIndex(104)
//=> 'https://unpkg.com/qqface@0.1.2/img/104.png'

// gif兜底 支持 0.gif ~ 121.gif
qqface.imgFromIndex(121, 'gif')
qqface.imgFromIndex(121, 'png')
qqface.imgFromIndex(121)
//=> 'https://unpkg.com/qqface@0.1.2/img/121.gif'
```

名词解释:

- `text`为表情对应的文字信息
- `index`为(webqq)表情选择栏上的显示序号

API:

- `textMaps` = `[["微笑",..], ["Smile",..]]`
- `textFromIndex(index, [lang])`
- `indexFromText(text, [lang])`
- `imgFromIndex(index, [type])`
