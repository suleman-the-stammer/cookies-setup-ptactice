const express = require('express');
const app = express();

app.get('/' , function(req, res){
    res.cookie("name" , "Suleman"  )
    res.cookie("age" , 24)
    res.send("check kro bhai")
})
app.listen(3000);