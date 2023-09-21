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
app.get('/find',async(req,res)=>{
    const details=await db.collection("srkr").findOne({Gmail:"divya@gmail.com"})
    res.send(details);
});
app.post('/insert/:name/:text/:user/:gmail',async(req,res)=>{
    const details=await db.collection('Group').insertOne({Name:req.params.name,Msg:req.params.text,User:req.params.user,Gmail:req.params.gmail})
    res.send(details);
});
app.get('/screen',async(req,res)=>{
    const details=await db.collection("Group").find({}).toArray()
    res.send(details);
});
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})