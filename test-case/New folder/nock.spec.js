
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/studentCtrl');
var stdClass = new Student();
var nock = require('nock');
const axios = require('axios');

describe('-------------GET API DATA USING Nock----------', function()
{
    this.timeout(0);
    it("GET API Test", function()
    {
        var obj = {statusCode: 'Ok'}
        const hitapi = nock('http://localhost:8000')
                     .get('/user')
                     .reply(200,obj);
                     
        stdClass.thirdpartAPI()
        .then((record)=>{
            expect(record).to.be.eql(obj);          

        }).catch(error=>{
            console.log(new Error('Error==========>:'+error))
        })
    })

  
    
})
