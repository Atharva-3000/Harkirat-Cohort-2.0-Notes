const express = require('express');
const app = express();
function middleware(){
    return function(req,res,next){

    }
}
app.use(middleware);
app.use(express.json());

app.get("/",(req, res)=>{
    
})
app.listen(3000);