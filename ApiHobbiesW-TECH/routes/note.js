import {Router} from 'express';
import { addNote, getNotes, putNote, deleteNote } from '../controller/note.controller.js';
var router = Router();


router.get('/all', getNotes);
router.post('/add', addNote);
router.put('/edit/:id', putNote);
router.delete('/delete/:id', deleteNote);


export default router;