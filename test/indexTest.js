var assert = require(`chai`).assert;
var index = require(`../index`)


describe(`index`, function(){
 
    it('should return test', function(){
        assert.equal(index(), `test`);
    })
});