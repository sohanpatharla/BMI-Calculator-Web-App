import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { log } from "console";

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('welcome');
});

app.get('/start',(req,res)=>{
    res.render('index',{bmiResult:null,bmiCategory:null})
})

app.post('/calculate',(req,res)=>{
    let weight=parseFloat(req.body.weight);
    let height=parseFloat(req.body.height)/100;

    let bmi=weight/(height*height);
    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal Weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    res.render('index',{bmiResult:bmi,bmiCategory:bmiCategory})
})

app.listen(3000,()=>{
    console.log("Server running on 3000");
})

