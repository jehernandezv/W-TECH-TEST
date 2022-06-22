import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let model = mongoose.model;

const noteSchema = new Schema({
    note: { type: String, required: true}
},
{
    timestamps: true
});

var NoteModel = model('note', noteSchema);

const saveNote = (noteData) => {
    var note = new NoteModel(noteData);
    return new Promise(function (resolve, reject){
        note.save().then(noteAdd => {
            resolve(noteAdd);
        }).then(err => {
            reject('Error saving note: ' + err);
        })
    });
}

const editNote = (query, noteData) => {
    return new Promise(function (resolve, reject) {
        NoteModel.findOneAndUpdate(query, noteData, {returnDocument: true}).then(updated => {
            resolve(updated);
        }).catch(err => {
            reject('Error updated note: ' + err);
        });
    });
}

const removeNote = (query) => {
    return new Promise(function (resolve, reject) {
        NoteModel.findOneAndDelete(query).then(deleted => {
            if(!deleted) reject('Error delete note')
            resolve(deleted)
        }).catch(err => {
            reject('Error delete note: ' + err);
        })
    });
}

const enumNote = (query) => {
    return new Promise(function (resolve, reject) {
        NoteModel.find(query).then(note => {
            resolve(note);
        }).catch(err => {
            reject('Error find note: ' + err);
        })
    });
}

export {NoteModel, saveNote, editNote, removeNote, enumNote}