const express = require("express");
require("../src/db/conn");

const  MensRanking = require("../src/models/mens");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT ||3000;
app.use(express.json());

                                             


//Add new data 
 app.post("/mens", async(req,res)=>{
     try{
         const addingMensRecords= new MensRanking(req.body);
         console.log(req.body);
         const insertMens = await addingMensRecords.save();
         res.status(200).send(insertMens);
     }catch (err){
         res.status(400).send(err);
     }
 })




//show the data
app.get("/getMens",async(req,res)=>{
    try{
        const getMens =await MensRanking.find({});
        res.send(getMens);
    }catch(err){
        res.send(400).send(err);
        console.log(err);
    }
})


//get by indivisual ID
app.get("/getMens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMens =await MensRanking.findById({_id:_id});
        res.send(getMens);
    }catch(err){
        res.send(400).send(err);
        console.log(err);
    }
})







//update method (patch method)
app.patch("/updateMens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateMens =await MensRanking.findByIdAndUpdate({_id:_id},req.body,{
            new:true
        });

        res.send(updateMens);
    }catch(err){
        res.send(400).send(err);
        console.log(err);
    }
})


//Delete by method
app.delete("/deleteMens/:id",async(req,res)=>{
    try{
        const deleteMens =await MensRanking.findByIdAndDelete(req.params.id);
        res.send(deleteMens);
    }catch(err){
        res.send(400).send(err);
    }
})

app.listen(port, ()=>{
    console.log(`connection is live at port no. ${port}`);
})






// let arrname =[
//     {
//         name:"omkar",
//         lname:"lkakde",
//     },
//     {
//         name:"thapa",
//         pass:"technical",
//     },
// ];

// console.log(arrname.indexOf({
//     name:"thapa",
//     pass:"technical",
// })
// );
 


// var array1= [1,2,4,9,5,7];

// var array2= [5,1,9,4,2];


// const number = array1.length == array2.length;
// console.log(number);