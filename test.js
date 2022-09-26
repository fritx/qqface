var assert = require('assert')
var qqface = require('./')

describe('qqface', function(){

	it('textFromIndex', function(){
		assert.equal(qqface.textFromIndex(0), '微笑')
		assert.equal(qqface.textFromIndex(0, 'zh'), '微笑')
		assert.equal(qqface.textFromIndex(0, 'en'), 'Smile')

		assert.equal(qqface.textFromIndex(9), '大哭')
		assert.equal(qqface.textFromIndex(14), '惊讶')
	})

	it('indexFromText', function(){
		assert.equal(qqface.indexFromText('委屈'), 49)
		assert.equal(qqface.indexFromText('委屈', 'en'), 49)
		assert.equal(qqface.indexFromText('委屈', 'zh'), 49)
		assert.equal(qqface.indexFromText('Shrunken'), 49)
		assert.equal(qqface.indexFromText('Shrunken', 'en'), 49)
		assert.equal(qqface.indexFromText('Shrunken', 'zh'), 49)
	})

	it('imgFromIndex', function(){
		assert.equal(qqface.imgFromIndex(104, 'png'), 'https://unpkg.com/qqface@0.1.2/img/104.png')
		assert.equal(qqface.imgFromIndex(104), 'https://unpkg.com/qqface@0.1.2/img/104.png')

		assert.equal(qqface.imgFromIndex(121, 'gif'), 'https://unpkg.com/qqface@0.1.2/img/121.gif')
		assert.equal(qqface.imgFromIndex(121, 'png'), 'https://unpkg.com/qqface@0.1.2/img/121.gif')
		assert.equal(qqface.imgFromIndex(121), 'https://unpkg.com/qqface@0.1.2/img/121.gif')
	})

})
