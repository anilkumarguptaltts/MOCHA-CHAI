const chai = require('chai');
const assert = chai.assert;

describe('The Testing with chai', function(){
    let username ="anilgagan";
    let myList = {
        item :[{
            id:1,
            name:'anil'
        }],
        title:'this is title'
    }
    it('Check string are not', function(){
        assert.typeOf(username,'string')
    })
    it('check equal', function(){
        assert.equal(username,'anilgagan')
    })
    it('length match',function(){
        assert.lengthOf(myList.item,1)
    })

    
})

//=====================should=====================
var should = require('chai').should();
describe('Should be string', function(){
    var userName ="anilgagan";
      it('shoul be string',function(){
        userName.should.be.a('string');
    })
})

//=====================Expect=====================
var expect = require('chai').expect
describe('Expect to be a string', function(){
    var userName ="anilgagan";
      it('shoul be string',function(){
        expect(userName).to.be.a('string');
    })
})