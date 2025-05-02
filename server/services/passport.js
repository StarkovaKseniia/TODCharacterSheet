const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Player = mongoose.model('players');

passport.serializeUser((player, done) => {
    done(null, player.id);
});

passport.deserializeUser((id, done) => {
    Player.findById(id).then(player => {
        done(null, player);
    });
});

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
        }, 
        (accessToken, refreshToken, profile, done) => {
            Player.findOne({ googleId: profile.id }).then((existingPlayer) => {
                    if (existingPlayer){
                        done(null, existingPlayer);
                    } else {
                        new Player({ googleId: profile.id }).save().then(player => done(null, player));
                    }
                }) 
        }
    )
);