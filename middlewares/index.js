exports.logado = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.render('faca-login');  
    }
    next();
};