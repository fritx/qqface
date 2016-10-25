# qqface

经典QQ表情/文字替换 已应用于[qqlog](https://github.com/fritx/qqlog)<br>
版本0.1.x新增了png/gif图片目录

```js
var qqface = require('qqface')

qqface.textFromCode(14)
//=> '微笑'
qqface.textFromCode(14, 'en') // 英文可选
//=> 'Smile'

qqface.textFromIndex(0)
//=> '微笑'

qqface.codeFromText('发呆')
//=> 3
qqface.indexFromText('委屈')
//=> 49
```

```js
qqface.pngFromIndex(23)
//=> '/Users/xxx/xxx/node_modules/qqface/img/23.png'
qqface.gifFromIndex(23)
//=> '/Users/xxx/xxx/node_modules/qqface/img/23.gif'
qqface.imgFromIndex(23, 'gif')
//=> '/Users/xxx/xxx/node_modules/qqface/img/23.gif'
```

名词解释:

- `text`为表情对应的文字信息
- `code`为表情对应的数字码
- `index`为(webqq)表情选择栏上的显示序号

API:

- `indexFromCode(code)`
- `codeFromIndex(index)`
- `textFromIndex(index, [lang])`
- `indexFromText(text, [lang])`
- `textFromCode(code, [lang])`
- `codeFromText(text, [lang])`
- `codeMap` = `[14,1,2,3,4,5,6,7,8,..]`
- `textMaps` = `[["微笑",..], ["Smile",..]]`
- `imgPrefix` = 'qqface/img/'
- `pngFromIndex(index)`
- `gifFromIndex(index)`
- `imgFromIndex(index, type)`
