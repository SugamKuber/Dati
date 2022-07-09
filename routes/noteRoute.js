const router = require('express').Router()
const Note = require("../models/noteModel");

router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        return res.status(200).json(notes);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router;