import express from 'express';
import axios from 'axios';
import {db,connectToDB} from "./db.js";
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server is running successfully!");
})
app.get('/mail/:value/:buttonId',async(req,res)=>{
    const details=await db.collection(req.params.value).find({User:req.params.buttonId}).toArray()
    res.send(details);
});
app.get('/mail1s/:value',async(req,res)=>{
    const details=await db.collection(req.params.value).find({}).toArray()
    res.send(details);
});
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server Running At port 6000");
    })
})