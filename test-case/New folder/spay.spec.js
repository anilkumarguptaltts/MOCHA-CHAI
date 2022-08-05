var sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/studentCtrl');
var studentObj = new Student();

describe('check user data match or not', function(){
    it("Test user function", function(){
        expect(studentObj.userId()).to.be.equal(10)
    })

    it("function count", function(){
        var spyObj = sinon.spy(studentObj,'getInfo')
       // spyObj.home(5);
        //expect(spyObj.calledOnce).to.be.true;
        //expect(spyObj.calledTwice).to.be.true;
    })
    
})
