const express = require('express');
const authRouter = require('./auth').router;
const usuarioRouter = require('./usuario').router;
const atletasRouter = require('./atletas').router;
const escaladorRouter = require('./escalador').router;
const appRouter = require('./app').router;
const SanMartinError = require('../helpers/sanmartinerror').SanMartinError;

const router = express.Router();

router.use('/auth', authRouter);
router.use('/usuario', usuarioRouter);
router.use('/atletas', atletasRouter);
router.use('/escalador', escaladorRouter);
router.use('/app', appRouter);

router.use((err, req, res, next) => {
    if ('name' in err) {
        if (err.name === 'MongoError') {
            err.method = req.method;
            err.originalUrl = req.originalUrl;
        }
        err = SanMartinError.makeError(err);
    }
    console.error(err);
    return res.status(err.httpStatusCode || 500).send(err.message);
});

exports.router = router;