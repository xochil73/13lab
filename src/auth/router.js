'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google.js');

authRouter.post('/signup', (req, res, next) => {
    let user = new User(req.body);
    user.save()
        .then( (user) => {
            req.token = user.generateToken();
            req.user = user;
            res.set('token', req.token);
            res.cookie('auth', req.token);
            res.send(req.token);
        }).catch(next);
});
//adding a new post route to generate an auth key that will not expire or be deleted
authRouter.post('/key', (req, res, next) => {
    let user = new User(req.body);
    user.save()
        .then( (user) => {
            req.key = user.generateKey();
            req.user = user;
            res.set('key', req.key);
            res.cookie('auth', req.key);
            res.send(req.key);
        }).catch(next);
});
authRouter.post('/signin', auth, (req, res, next) => {
    res.cookie('auth', req.token);
    res.send(req.token);
});

authRouter.get('/oauth', (req,res,next) => {
    oauth.authorize(req)
        .then( token => {
            res.status(200).send(token);
        })
        .catch(next);
});

module.exports = authRouter;