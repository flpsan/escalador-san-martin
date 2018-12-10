import express from 'express';
import passport from "passport";
import passportGoogleOauth from 'passport-google-oauth';
import * as UsuarioController from '../controller/usuario';

const router = express.Router();

const GoogleStrategy = passportGoogleOauth.OAuth2Strategy;
const GOOGLE_CLIENT_ID = '634696227428-r4f5te4288o6mgmjbdors1qck93ahrv1.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'yAUxU8EOLmd2y4Cei2mDyeBC';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:3000/auth/google/callback`
  },
  function(_, __, profile, done) {
    let usuario = new UsuarioController.Usuario({
      id: profile.id,
      email: profile.emails[0].value,
      nome: profile.displayName,
      primeiroProfile: 'google',
      googleProfile: profile
    });
    UsuarioController.obterOuCriar(usuario, (err, usuario0) => done(err, usuario0));
  }
));

router.get('/google',
  passport.authenticate('google', { scope: ['email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/app');
  });

passport.serializeUser((usuario, done) => {
	done(null, usuario);
});

passport.deserializeUser((usuario, done) => {
	done(null, usuario);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/app');
});

export { router };