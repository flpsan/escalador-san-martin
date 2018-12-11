process.env.isDev = process.env.USERNAME == 'Felipe';

console.log(process.env);

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const redis = require('connect-redis');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes').router;
const db = require('./helpers/db');

const app = express();
app.set('view engine', 'pug');

const RedisStore = redis(session);
app.use(express.static('public'));
app.use(cookieParser('TESTE SECRET'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var redisStoreOptions = process.env.isDev ? 
    { host: 'localhost', port: 6379, disableTTL: true } : 
    { host: 'redis-11956.c90.us-east-1-3.ec2.cloud.redislabs.com', port: 11956, disableTTL: true, pass: 'um2345678' };

app.use(session({
    store: new RedisStore(redisStoreOptions),
    saveUninitialized: true,
    resave: false,
    secret: 'TESTE SECRET',
    cookie: { maxAge: 24 * 360000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.set('view engine', 'pug');

let porta = process.env.PORT || 80;
app.listen(porta, () => {
    console.log(`Listening on port ${porta}`);
    db.start();
});
