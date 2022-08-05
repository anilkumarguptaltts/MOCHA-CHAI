var jsonData =  {
  "status": 200,
  "statusText": "success",
  "statusCode": 'Ok',
  "data" : [
              {
                "id":1,
                "name":"A"
              },
              {
                "id":2,
                "name":"B"
              },
              {
                "id":3,
                "name":"C"
              },
              {
                "id":4,
                "name":"D"
              },
              {
                "id":5,
                "name":"E"
              }
        ]
};
const userList = (req,res)=>{
  res.send({"articlelist":jsonData});
  
}
module.exports = {
  userList
}