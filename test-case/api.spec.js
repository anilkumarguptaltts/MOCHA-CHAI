
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/studentCtrl');
var stdClass = new Student();
var chaihttp = require('chai-http');
chai.use(chaihttp);

var server = require('../app');

describe('Unit test APIs', function(){
    //this.timeout(0);
    it('GET  API', function(done){
        chai.request(server)
        .get('/user')
        .end((err,response)=>{           
            expect(response.status).to.be.equal(200);
            done();
        })
    })

    //------------------------------------Post API DAta-----------------
    it('POST API', function(done){        
        stdClass.postApiData({ username: 'me', password: '123',status:1 })
        .then((postData)=>{           
            expect(postData.status).to.be.equal(1);
            done();       

        }).catch(error=>{
            console.log(new Error('Error==========>:'+error))
        })
    })

     //------------------------------------Put API DAta-----------------
     it('PUT API', function(done){        
        stdClass.updateApiData({ password: '123',status:1 })
        .then((updateData)=>{           
            expect(updateData.status).to.be.equal(1);
            done();       

        }).catch(error=>{
            console.log(new Error('Error==========>:'+error))
        })
    })

    //------------------------------------Delete API DAta-----------------
    it('Delete API', function(done){        
        stdClass.deleteApiData({ password: '123',status:1 })
        .then((deleteApiData)=>{           
            expect(deleteApiData.status).to.be.equal(1);
            done();       

        }).catch(error=>{
            console.log(new Error('Error==========>:'+error))
        })
    })
})