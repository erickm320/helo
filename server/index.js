require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./authController');
const {CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    console.log('db connected')
    app.set('db', db);
}).catch(err => console.log(err))

app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login);


app.listen(3333,function(){
    console.log('Im listening')
})