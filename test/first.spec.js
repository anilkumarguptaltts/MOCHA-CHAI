var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });
  });

  describe('this is first test cases',function(){
    it('chheck values-1',function(){
        assert.equal([1, 2, 3].indexOf(3), 2);
    })
    it('chheck values-2',function(){
        assert.equal([1, 2, 3].indexOf(4), -1);
    })
  })
});