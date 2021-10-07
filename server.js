const express = require('express');   //express module을 불러온다
const app = express();              //app에 express() 함수의 변환 값을 저장
var passport = require('passport');
var NaverStrategy = require('passport-naver').Strategy;
var router = express.Router()
var loginRouter = require('./login.js');

client_id = 'sQnAiTwCTKvgHeKe1M91'
cline_secret = 'lrXYXxnuww'
redirectURI = 'localhost:8080'

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/search', function(req,res){
  console.log(req.query.search);
})

app.get('/naver/login', loginRouter);

app.get('/naver/login/callback', function(req,res){
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function(){
  console.log('Listening at 8080');
});