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



