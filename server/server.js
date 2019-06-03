const path = require('path');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./authCtrl')
const apiCtrl = require('./apiCtrl')
require('dotenv').config();

const app = express();

const { 
    SERVER_PORT, 
    CONNECTION_STRING, 
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db =>{
    app.set('db',db);
    console.log('DATABASE CONNECTED');
})
app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

//Send Files
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//AUTH API
app.post('/auth/login', authCtrl.login)
app.post('/auth/register',authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)


//TUNING API
app.get('/api/user-info',apiCtrl.userInfo)
app.post('/api/tunings', apiCtrl.saveTuning)
app.put('/api/tunings',apiCtrl.updateTuning)
app.delete('/api/tunings/:name',apiCtrl.deleteTuning)

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen( SERVER_PORT, () =>{
    console.log(`Server is listening on port: ${SERVER_PORT}`)
})


