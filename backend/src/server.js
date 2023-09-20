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
app.get('/find/:gmail',async(req,res)=>{
    const details=await db.collection("srkr").findOne({Gmail:req.params.gmail})
    res.send(details);
});    
app.get('/find/:gmail/:value',async(req,res)=>{
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
app.post('/profile1/:fname/:sname/:dob/:gender/:age/:gmail/:gyear/:degree/:prof/:field/:carrier/:git/:link/:achievements/:add/:profilepic',async(req,res)=>{
    const data=await db.collection("alumini").insertOne({Fname:req.params.fname,Lname:req.params.sname,DOB:req.params.dob,Gender:req.params.gender,Age:req.params.age,Gmail:req.params.gmail,Gyear:req.params.gyear,Degree:req.params.degree,Profession:req.params.prof,Field:req.params.field,Carrier:req.params.carrier,Git:req.params.git,Link:req.params.link,Achievements:req.params.achievements,Address:req.params.add,Profilepic:req.params.profilepic});
    res.json(data);
})

app.post('/Sprofile/:fname/:lname/:/dob/:gender/:age/:gmail/:gyear/:field/:carrier/:git/:link/:achievements/:add/:profilepic/:resume',async(req,res)=>{
    const data=await db.collection("student").insertOne({Collegename:req.params.collegename,Fname:req.params.fname,Lname:req.params.lname,DOB:req.params.dob,Gender:req.params.gender,Age:req.params.age,Gmail:req.params.gmail,Gyear:req.params.gyear,Field:req.params.field,Git:req.params.git,Link:req.params.link,Achievements:req.params.achievements,Address:req.params.add,Profilepic:req.params.profilepic,Resume:req.params.resume});
    res.json(data);
})

app.get('/output/:regno',(req,res)=>{
    const data=db.collection("srkr").findOne({regdno:req.params.regno})
})
app.get('/pview',async(req,res)=>{  
    const details=await db.collection('alumni').find({Fname:req.params.value}).toArray()
     res.send(details);
});
app.get('/find/',async(req,res)=>{
    const details=await db.collection("srkr").findOne({Gmail:req.params.value})
    res.send(details);
});
app.get('/college/:email/:password',async(req,res)=>{
    const details=await db.collection("college").findOne({Gmail:req.params.email,Password:req.params.password})
    res.send(details);
});
app.post('/insert/:text',async(req,res)=>{
    const details=await db.collection('Group').insertOne({Msg:req.params.text,User:"divya",Gmail:"divyaharshitha7704@gmail.com"})
    res.json(details);
});
app.get('/screen',async(req,res)=>{
    const details=await db.collection("Group").find({}).toArray()
    res.send(details);
});
app.get('/find2/:code/:gmail/:regdno/:password',async(req,res)=>{
    const details=await db.collection("srkr").findOne({Gmail:req.params.gmail,Regdno:req.params.regdno,DOB:req.params.password})
    res.send(details);
});
app.get('/mail/:buttonId',async(req,res)=>{
    const details=await db.collection("srkr").find({User:req.params.buttonId}).toArray()
    res.send(details);
});
app.get('/mails',async(req,res)=>{
    const details=await db.collection("srkr").find({}).toArray()
    res.send(details);
});

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
