var assert = require('assert')
var qqface = require('./')

describe('qqface', function(){

	it('textFromCode', function(){
		assert.equal(qqface.textFromCode(14), '微笑')
		assert.equal(qqface.textFromCode(14, 'en'), 'Smile')
	})

	it('textFromIndex', function(){
		assert.equal(qqface.textFromIndex(0), '微笑')

		assert.equal(qqface.textFromIndex(9), '大哭')
		assert.equal(qqface.textFromIndex(14), '惊讶')
	})

	it('codeFromText', function(){
		assert.equal(qqface.codeFromText('发呆'), 3)
		assert.equal(qqface.codeFromText('委屈'), 106)

		assert.equal(qqface.codeFromText('微笑'), 14)
		assert.equal(qqface.codeFromText('Smile', 'en'), 14)
	})

})
