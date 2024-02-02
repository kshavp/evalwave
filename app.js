const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('index.html');
});
app.get('/login',(req,res)=>{
    res.render('login.html');
});
app.get('/register',(req,res)=>{
    res.render('register.html');
});

const validateRegisteredUser = (obj) =>{
    for(let creds in obj){
        if(obj[creds] === ''){
            return res.status(400).json({error:'Invalid Data Received'});
        }
    }
}

app.post('/register',(req,res)=>{
    const user={
        fname: req.body.f_name,
        lname: req.body.l_name,
        email: req.body.email,
        pass: req.body.pass,
        re_pass: req.body.re_pass
    };
    validateRegisteredUser(user);
    console.log(user);
}); 

app.listen(PORT,()=>{
    console.log(`Running at ${PORT}`);
});