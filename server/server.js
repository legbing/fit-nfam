const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require("bcryptjs");
//import {useHistory} from 'react-router-dom';
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
//const history = useHistory();
mongoose.connect("mongodb://localhost:27017/auth", {
    
}); ()=>{
    console.log("Connected to DB")
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, );

var User = new mongoose.model("User", userSchema);


app.post("/login", function (req, res) {
    var name = req.body.username;
    var password = req.body.password;
    //const {name, password} = req.body;
    console.log(name, password);
    //alert(name, password);
    User.findOne({name:name}, async function (err,user){
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                console.log("Login successful");
                res.send({message:"Login success", user:user});
            }
           /*
           
      
            if(password === user.password) {
                //console.log("Login success");
                res.send({message:"Login success", user:user});
                //res.redirect('/');
            }
            */
            else {
                console.log("Wrong credentials");
                res.send({message: "wrong credentials"});
            }
        }
        else {
            //console.log(res);
            res.send({message: "Not registered yet."});
            //res.redirect('/register');
        }
    })
});

app.post("/register", async function (req, res) {
    console.log("Request posted");
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    //alert(name, email, password);
    var data = {
        "name":name,
        "email":email,
        "password":password
    }
    
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    User.findOne({email:email}, (err, user)=>{
        if(user) {
            res.send({message: "User already exists"});
            //history.push('/login');
            //res.redirect('/login');
            
        } else {
            const user = new User({name, email, password});
            user.save(err=>{
                if(err) {
                    res.send({message: err});
                }
                else {
                    res.send({message:"Registration Successful"});
                    //res.redirect('/login');
                }
            })
        }
        
    })
})

app.listen(5000, ()=> {
    console.log("Server is running");
})