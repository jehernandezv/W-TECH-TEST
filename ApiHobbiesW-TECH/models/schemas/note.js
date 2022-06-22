import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

/** Definimos el esquema ODM con la ayuda de Schema */
const noteSchema = new Schema({
    note: { type: String, required: true}
},
{
    timestamps: true
});

/**Creamos un modelo con base al Schema anterior el cual sera almacenado en una coleccion notes */
const NoteModel = model('note', noteSchema);

/** Definimos el saveNote para tratar el proceso de guardado en la base de datos
 * @ingresa un objeto con los campos del noteSchema
 * @return Este retorna una promesa la cual sera resulta finalmente en el controlador
 */
const saveNote = (noteData) => {
    let note = new NoteModel(noteData);
    return new Promise(function (resolve, reject){
        note.save().then(noteAdd => {
            resolve(noteAdd);
        }).then(err => {
            reject('Error saving note: ' + err);
        })
    });
}

/** Definimos el editNote para tratar el proceso de actualizar un documento en la base de datos
 * @query un objeto con los campos a comparar y conseguir una coincidencia de documentos
 * @noteData objeto set con los campos para actualizar
 * @return Este retorna una promesa la cual sera resulta finalmente en el controlador
 */
const editNote = (query, noteData) => {
    return new Promise(function (resolve, reject) {
        NoteModel.findOneAndUpdate(query, noteData, {returnDocument: true}).then(updated => {
            if(!updated) reject('Error update note')
            resolve(updated);
        }).catch(err => {
            reject('Error updated note: ' + err);
        });
    });
}

/** Definimos el removeNote para tratar el proceso de remover un documento en la base de datos
 * @query un objeto con los campos a comparar y conseguir una coincidencia de documentos
 * @return Este retorna una promesa la cual sera resulta finalmente en el controlador
 */
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

/** Definimos el editNote para tratar el proceso de actualizar un documento en la base de datos
 * @query un objeto con los campos a comparar y conseguir una coincidencia de documentos
 * @return Este retorna una promesa la cual sera resulta finalmente en el controlador
 */
const enumNote = (query) => {
    return new Promise(function (resolve, reject) {
        NoteModel.find(query).then(note => {
            resolve(note);
        }).catch(err => {
            reject('Error find note: ' + err);
        })
    });
}

/**Exportamos todos los métodos propios del modelo note */
export {NoteModel, saveNote, editNote, removeNote, enumNote}