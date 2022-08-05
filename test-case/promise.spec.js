
var chai = require('chai');
var sinon = require("sinon");
var expect = chai.expect;
var Student = require('../controllers/studentCtrl');
var studentObj = new Student();
var chaiaspromise = require('chai-as-promised');
chai.use(chaiaspromise);


describe('Method-1 : Write Promise', function(){
    it("Get value fuctions", function(done){
        this.timeout(0);
        studentObj.dbData().then(function(result){
            expect(result).to.be.equal(10);
            done();
        })
    })
    
    it("Method-2 : Write Promise", function(done){   
        this.timeout(1000);
            expect(studentObj.dbData()).to.eventually.equal(10);
            done();
        }) 
    
})
