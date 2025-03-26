const e = require('express');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


//app.set('view engine','ejs');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(bodyParser.json());
let names=['alii','elishishe'];

app.get('/',(req,res)=>{
    const names = "cisco"
    res.render('./index',{names})
})

app.post('/register',(req,res)=>{
    const name  = req.body.name;
    const email  = req.body.email;
    const admnNo  = req.body.admnNo;

    
    var details = [name,email,admnNo];

    console.log(details);
    
    

})


app.listen(port,(err)=>{
    if(err){
        console.log(`server not running :${err}` )
    }else{
        console.log(`server running on port ${port}`)
    }
})