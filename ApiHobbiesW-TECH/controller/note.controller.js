import { saveNote, enumNote, editNote, removeNote } from '../models/schemas/note.js'

const addNote = function (req, res) {
    saveNote(req.body).then(saved => {
        res.json(saved);
    }).catch(err => {
        res.status(400).json(err);
    })
}

const getNotes = function (req, res) {
    enumNote({}).then(notes => {
        res.json(notes);
    }).catch(err => {
        res.status(400).json(err);
    })
}

const putNote = function (req, res) {
    editNote({ _id: req.params.id }, { $set: req.body }).then(updated => {
        res.json(updated);
    }).catch(err => {
        res.status(400).json(err);
    })
}

const deleteNote = function (req, res) {
    removeNote({_id: req.params.id}).then(deleted => {
        res.json(deleted)
    }).catch(err => {
        res.status(400).json(err);
    })
}

export { addNote, getNotes, putNote, deleteNote }