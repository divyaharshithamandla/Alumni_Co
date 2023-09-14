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
app.get('/mail/:buttonId',async(req,res)=>{
    const details=await db.collection("srkr").find({User:req.params.buttonId}).toArray()
    res.send(details);
});
app.get('/mail1s',async(req,res)=>{
    const details=await db.collection("srkr").find({}).toArray()
    res.send(details);
});
app.get('/find/',async(req,res)=>{
    const details=await db.collection("srkr").findOne({Gmail:"divyaharshitha7704@gmail.com"})
    res.send(details);
});
app.post('/insert/:text/:"student"/:"divyaharshitha7704@gmail.com"',async(req,res)=>{
    const details=await db.collection('Group').insertOne({Msg:req.params.text,User:"student",Gmail:"divyaharshitha7704@gmail.com"})
    res.json(details);
});
app.get('/screen',async(req,res)=>{
    const details=await db.collection("Group").find({}).toArray()
    res.send(details);
});
connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server Running At port 6000");
    })
})