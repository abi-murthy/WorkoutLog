const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({msg:'all workouts'})
})

router.get('/:id',(req,res)=>{
    res.json({msg:'single workout'})
})

router.post('/',(req,res)=>{
    res.json({msg:'put ina  new workout'})
})

router.patch('/:id', (req,res)=>{
    res.json({msg: 'edit single workout'})
})

router.delete('/:id', (req,res)=>{
    res.json({msg:'delete this workout'})
})

module.exports = router
