var express = require('express');
var router = express.Router();
var passport = require('passport'); //passport 추가
var NaverStrategy = require('passport-naver').Strategy;

router.get('/naver/login', passport.authenticate('naver',null),function(req,res){
    console.log("/naver/login")
  });
  
router.get('/naver/login/callback', passport.authenticate('naver', {
    successRedirect: '/',
    failureRedirect: '/naver/login'
  }));
  
passport.use(new NaverStrategy({
    clientID: 'sQnAiTwCTKvgHeKe1M91',
    clientSecret: 'lrXYXxnuww',
    callbackURL: '/naver/login/callback'
  },
function(accessToken, refreshToken, profile, done){
    process.nextTick(function(){
    })
  }))
  
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(req, user, done) {
  
  // passport로 로그인 처리 후 해당 정보를 session에 담는다.
  req.session.sid = user.name;
  console.log("Session Check :" +req.session.sid);
    done(null, user);
});

module.exports = router;