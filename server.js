const express = require('express');
const app = express();
const port = 3000;


//app.set('view engine','ejs');
//app.set('view engine','hbs');

let names=['alii','elishishe'];

app.get('/',(req,res)=>{
    const name = "cisco"
    res.render('./index',{names})
})


app.listen(port,(err)=>{
    if(err){
        console.log(`server not running :${err}` )
    }else{
        console.log(`server running on port ${port}`)
    }
})