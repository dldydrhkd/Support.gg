const express = require('express');   //express module을 불러온다
const app = express();              //app에 express() 함수의 변환 값을 저장
var passport = require('passport');
var loginRouter = require('./login.js');
var fs = require('fs');
const path = require('path')
const static = require('serve-static')

app.use(static(path.join(__dirname, 'img')));


client_id = 'sQnAiTwCTKvgHeKe1M91'
cline_secret = 'lrXYXxnuww'
redirectURI = 'localhost:8080'

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/search', function(req,res){
  console.log(req.query.search);
});

app.get('/login', function(req,res){
  res.sendFile(__dirname+'/login_page.html');
});

app.get('/images/naver', function(req, res){
  fs.readFile('./images/naver_login.png', function(error, data){
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.get('/images/kakao', function(req, res){
  fs.readFile('./images/kakao_login.png', function(error, data){
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.get('/naver/login', loginRouter);

app.get('/naver/login/callback', function(req,res){
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function(){
  console.log('Listening at 8080');
});