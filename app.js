import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis from 'connect-redis';
import session from 'express-session';
import passport from "passport";
import { router } from './routes';
import * as db from './helpers/db';

const app = express();
app.set('view engine', 'pug');

const RedisStore = redis(session);
app.use(express.static('public'));
app.use(cookieParser('TESTE SECRET'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    store: new RedisStore({ host: 'localhost', port: 6379, disableTTL: true }),
    saveUninitialized: true,
    resave: false,
    secret: 'TESTE SECRET',
    cookie: { maxAge: 24 * 360000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.set('view engine', 'pug');

let porta = process.env.PORT || 3000;
app.listen(porta, () => {
    console.log(`Listening on port ${porta}`);
    db.start();
});
