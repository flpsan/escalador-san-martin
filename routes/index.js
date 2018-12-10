import express from 'express';
import { router as authRouter } from './auth';
import { router as usuarioRouter } from './usuario';
import { router as atletasRouter } from './atletas';
import { router as escaladorRouter } from './escalador';
import { router as appRouter } from './app';
import { SanMartinError } from '../helpers/sanmartinerror';

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

export { router };