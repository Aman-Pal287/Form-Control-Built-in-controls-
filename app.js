//ROUTING IN EXPRESS

const express = require('express');
const morgan = require('morgan')//this is tird party middle ware
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'));
app.set('view engine' , 'ejs');// view engine install trough ejs se kiye hai

//yeh jo maine nice do line likhe hai wo isliye likhe hai kyuki simple POST method use karne pe humein terminal(terminal matlb body ke ander) par data show nhi hoat hai aur agr hum ye dono express ki inbuilt middleware ko use karte hai toh humein terminal pe user data show ho jata hai.
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//yeh niche maine css aur js file ko link karne ke liye ye express ka middle ware use kiya hu
app.use(express.static("public"));






app.get('/',(req,res)=>{       //YAHA SE ROUTING SET KARNE KA TARIKA
    res.render('index');
})

app.get('/register',(req,res)=>{
    res.render('index0');

})

app.post('/register',async(req,res)=>{
    // console.log(req.body)        
    const {username,email,phone,password} = req.body;

    const newUser =  await userModel.create({
        username:username,
        email:email,
        phone:phone,
        password:password
    })
    res.send(newUser);

})

app.get('/about',(req,res)=>{
    res.send("The About page");
})
app.get('/profile',(req,res)=>{
    res.send("The Profile  page");
})

// app.get('/get-form-data', (req,res)=>{    // ismein ek poblem hai. agr hum GET method se data apne server pe mangate hai toh woh url pe dikhne lagta hai jaiseki name email password . toh humein usse url pe nhi dikhana hai isliye hum POST method ka use karte hai.
//     console.log(req.query);
//     res.send("data received");
// })

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("data received");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});