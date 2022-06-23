import { saveNote, enumNote, editNote, removeNote } from '../models/schemas/note.js'


/**
 * Esta funcion recibe la peticion de agregar una nota
 * @param req 
 * @param res 
 * @return envia por medio del res una nota si todo esta ok, si no retorna un error 400 con el error
 */
const addNote = function (req, res) {
    saveNote(req.body).then(saved => {
        res.json(saved);
    }).catch(err => {
        res.status(400).json(err);
    })
}

/**
 * Esta funcion recibe la peticion de obtener las listas de la base de datos
 * @param req 
 * @param res 
 * @return envia por medio del res una lista de notas si todo esta ok, si no retorna un error 400 con el error
 */
const getNotes = function (req, res) {
    enumNote({}).then(notes => {
        res.json(notes);
    }).catch(err => {
        res.status(400).json(err);
    })
}

/**
 * Esta funcion recibe la peticion de actualizar una nota en especifico
 * @param req 
 * @param res 
 * @return envia por medio del res un objeto note si todo esta ok, si no retorna un error 400 con el error
 */
const putNote = function (req, res) {
    editNote({ _id: req.params.id }, { $set: req.body }).then(updated => {
        res.json(updated);
    }).catch(err => {
        res.status(400).json(err);
    })
}

/**
 * Esta funcion recibe la peticion de eliminar una nota en especifico
 * @param req 
 * @param res 
 * @return envia por medio del res un objeto note el cual se elimino si todo esta ok, si no retorna un error 400 con el error
 */
const deleteNote = function (req, res) {
    removeNote({_id: req.params.id}).then(deleted => {
        res.json(deleted)
    }).catch(err => {
        res.status(400).json(err);
    })
}

/**Exportamos las funciones para ser usadas por su respectivo router */
export { addNote, getNotes, putNote, deleteNote }