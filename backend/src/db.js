import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://sanjaykumarmullu333:hackathon@cluster0.ncxxjig.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Hackathon");
    cb();
}
export { connectToDB,db};