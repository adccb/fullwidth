const fullwidth = require('../index.js')

describe('fullwidth', () => {
	it('should make any arbitrary string fullwidth', () => {
		expect(fullwidth('hello')).toEqual('ｈｅｌｌｏ')
	})

  it('should handle fullwidth numbers', () => {
    expect(fullwidth('12345')).toEqual('１２３４５')
  })

  it('should handle spaces', () => {
    expect(fullwidth('12 345')).toEqual('１２ ３４５')
  })

  it('should not change punctuation', () => {
    expect(fullwidth('@#!&*@%')).toEqual('@#!&*@%')
  })
})
