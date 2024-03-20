const express = require('express');
const authorsRoute = require('./author-router');
const logger = require("./logger");

const PORT = 3878;


const app = express();

app.use(express.json());
app.use(logger);


app.use('/authors',authorsRoute)

/app.get('*',(req,res)=>{
    res.status(404).json({
        data:null,
        error:"Route not found"
    })
})



app.listen(PORT,()=>console.log(`app is listening to connections at http://localhost:${PORT}`))