const express = require("express");
const receipe = require('../models/ReceipeSchema');
const router = express.Router();

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


module.exports = router;
