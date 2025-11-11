const express = require("express");
const receipe = require('../models/ReceipeSchema');
const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const receipes = await receipe.find();
        res.status(200).json(receipes);

    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'une erreur mr aimad'});
    }
});

router.post('/', async (req,res)=>{
    const {title, ingredients, instructions } = req.body;
    if(!title || !ingredients || !instructions ){
        return res.status(400).json({ error: 'all fields are required' });
    }

    const newReceipe = await receipe.create({
        title,
        ingredients,
        instructions
    });
    res.status(201).json(newReceipe);
});


router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const receipeone = await receipe.findById(id);
        if(!receipeone){
            res.status(404).json({error: 'receipe not found aimad'});
        }
        res.status(200).json(receipeone);


    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'une erreur mr aimad'});
    }
});


router.put('/:id', async (req,res)=>{
    const {id} = req.params;
    const {title, ingredients, instructions } = req.body;
    try {
        const updatereceipe = await receipe.findByIdAndUpdate(id, {
            title, ingredients, instructions
        }, {
            new: true, runValidators: true
        } );
        if(!updatereceipe){
            res.status(404).json({error: 'receipe not found aimad'});
        }
        res.status(200).json(updatereceipe);


    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'une erreur mr aimad'});
    }
});


router.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    const {title, ingredients, instructions } = req.body;
    try {
        const deletereceipe = await receipe.findByIdAndDelete(id);
        if(!deletereceipe){
            res.status(404).json({error: 'receipe not found aimad'});
        }
        res.status(200).json(deletereceipe);


    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'une erreur mr aimad'});
    }
});


module.exports = router;
