const express = require('express');   //express module을 불러온다
const app = express();              //app에 express() 함수의 변환 값을 저장

app.get('/search',function(req,res){
  console.log("hello");
  console.log("teemo");
});

