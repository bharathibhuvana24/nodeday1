import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT=4000


let today = format(new Date(), 'dd-MM-yyyy-hh-mm-ss');      
let filepath = `./TimeStamp/${today}.txt`;  



app.get('/writefilesync', (req, res) =>
    {
        fs.writeFileSync(filepath, `${today}`, 'utf-8'); 
    })

app.get('/readfilesync' , (req,res) =>{
    let data =fs.readFileSync(filepath, 'utf-8');
    try {
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})


   app.listen(PORT, () => console.log("server is running on port 4000"))