require('dotenv').config();

const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
});

app.listen(3333,function(){
    console.log('Im listening')
})