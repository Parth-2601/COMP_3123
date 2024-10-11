const express = require('express');
const router = express.Router();
const Note = require('../models/NotesModel'); 

// Create a new note
router.post('/', async (req, res) => {
    try {
        const newNote = new Note(req.body);
        await newNote.save();
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send({ error: 'Unable to create the note', details: error.message });
    }
});

// Retrieve all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({ error: 'Unable to retrieve notes', details: error.message });
    }
});

// Retrieve a single note by ID
router.get('/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({ error: 'Unable to retrieve the note', details: error.message });
    }
});

// Update a note by ID
router.put('/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.noteId, req.body, { new: true, runValidators: true });
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(200).send(note);
    } catch (error) {
        res.status(400).send({ error: 'Unable to update the note', details: error.message });
    }
});

// Delete a note by ID
router.delete('/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndRemove(req.params.noteId);
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: 'Unable to delete the note', details: error.message });
    }
});

module.exports = router;
