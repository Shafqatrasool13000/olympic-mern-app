import express from 'express';
import { MensRanking } from '../models/mens.js';

const router=new express.Router();

// we will handle post request ::create document
router.post('/mens',async(req,res)=>{
    try {
    const mensRecord=new MensRanking(req.body);
    const result=await mensRecord.save();
    res.send(result);
    } catch (err) {
        res.status(400).send(err)
     console.log(err);   
    }
})

// read document
router.get('/mens',async(req,res)=>{
    try {
    const mensData=await MensRanking.find();
    res.send(mensData);
    } catch (err) {
    res.send(err)
     console.log(err);   
    }
});
// get single document
router.get('/mens/:id',async(req,res)=>{
  const _id=req.params.id;
    try {
    const menData=await MensRanking.findById(_id);
    res.send(menData);
    } catch (err) {
    res.send(err)
     console.log(err);   
    }
});
// Update document

// read document
router.get('/mens',async(req,res)=>{
    try {
    const mensData=await MensRanking.find();
    res.send(mensData);
    } catch (err) {
    res.status(400).send(err)
     console.log(err);   
    }
});
// get single document
router.patch('/mens/:id',async(req,res)=>{
  const _id=req.params.id;
    try {
    const menData=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
    res.send(menData);
    } catch (err) {
    res.status(400).send(err)
     console.log(err);   
    }
});

// Delete document

router.delete('/mens/:id',async(req,res)=>{
    const _id=req.params.id;
      try {
      const menData=await MensRanking.findByIdAndDelete(_id);
      res.send(menData);
      } catch (err) {
      res.status(400).send(err)
       console.log(err);   
      }
  });

router.get('/',async(req,res)=>res.send("Hello from root url"));


export {router}
