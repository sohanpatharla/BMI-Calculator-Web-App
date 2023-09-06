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
    res.render('index.ejs')
})

app.listen(3000,()=>{
    console.log("Server running on 3000");
})