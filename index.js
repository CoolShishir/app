const express = require('express');
const app = express();
const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./config/keys');

app.get('/',(req,res) => {
    res.send({ hi: "buddy" });
})

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'auth/google/callback'
},(accessToken,refreshToken,profile,done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}));

app.get('/auth/google', passport.authenticate('google',{scope : ['profile','email']}));
app.get('/auth/auth/google/callback',passport.authenticate('google'));
// app.listen(5000);
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// https://accounts.google.com
// /o/oauth2/v2/auth?
// response_type=code&
// redirect_uri=http%3A%2F%2F
// localhost%3A5000%2Fauth%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=202556203199-1svr4427p45r5id086kmvscb2s6jg0q7.apps.googleusercontent.com
