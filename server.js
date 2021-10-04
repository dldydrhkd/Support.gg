const express = require('express');   //express module을 불러온다
const app = express();              //app에 express() 함수의 변환 값을 저장

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function(){
  console.log('Listening at 8080');
});