const express = require("express");
const app = express();

app.use(express.json());

app.get('/data',(req,res)=>{
   return res.send({
    status:true,
    error:false,
    message:"success"
   })
});


let port = 4001;
app.listen(port,()=>{
    console.log(`The server is running ${port}`)
})