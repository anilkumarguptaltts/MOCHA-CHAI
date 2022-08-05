const {default:axios} = require('axios');

class Student
{
    constructor(){
    }

    home(type){
        let data = this.getInfo(type,1)
        return data + 1;
    }

    getInfo(){
        return 10;
    }

    userId(){
        return 10;
    }
    getExternal(total){
        return total + 1;
    }
    dbData(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve(10);
            },20000)
        })
    }

    thirdpartAPI(){
            return new Promise((resolve,reject)=>{
                axios.get('http://localhost:8000/user')
                .then((response)=>{
                    //console.log("anilgagan=>",response);
                    //return false;
                    resolve(response);
                })
                .catch(error=>{
                    reject(error)
                })
            })
        }
        postApiData(postData){
            return new Promise((resolve,reject)=>{
                // axios.post('http://localhost:8000/postdata')
                // .then((response)=>{
                //     console.log("jsonData=>",jsonData);
                //     return false;
                //     //resolve(response);
                // })
                // .catch(error=>{
                //     reject(error)
                // })
                //console.log("jsonData=>",postData);
                resolve(postData);
                // })
                // axios.post('http://localhost:8000/postdata', postData)
                //   .then(function (response) {
                //     resolve(response);
                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   });
            })
        }
        updateApiData(postData){
            return new Promise((resolve,reject)=>{               
                resolve(postData);             
            })
        }
        deleteApiData(deleteID){
            return new Promise((resolve,reject)=>{               
                resolve(deleteID);             
            })
        }
}
module.exports = Student;