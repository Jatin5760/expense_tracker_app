import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.get('/', (req,res)=>{
    res.send('Hello it is working');
})

const PORT = process.env.PORT;
//console.log("my port:", process.env.PORT);

app.listen(PORT,()=>{
    console.log("Server is running on port", PORT);
})