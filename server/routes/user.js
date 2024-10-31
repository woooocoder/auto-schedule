const express = require('express')
const User = require('./../model/user')
const Schedule = require('./../model/schedule')
const router = express.Router()
const { response } = require('express') 

router.get('/login', async (req, res) => {
    try {
        const id = req.body.id
        const user = await User.findById(id).populate('sessions')
        
        res.json(user.sessions)

    } catch (e) {
        response.send(400).json({message: e.message}) 
    }
})

router.get('/schedule', async (req, res) => {
    try {
        const schedule = await Schedule.findById(id).populate('schedule')
        res.json(schedule)
    }
})