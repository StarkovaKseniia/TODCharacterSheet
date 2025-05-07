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
        async (accessToken, refreshToken, profile, done) => {
            const existingPlayer = await Player.findOne({ googleId: profile.id });

            if (existingPlayer){
                return done(null, existingPlayer);
            } 
            
            const player = await new Player({ googleId: profile.id }).save();
            done (nuul, player);
        }
    )
);