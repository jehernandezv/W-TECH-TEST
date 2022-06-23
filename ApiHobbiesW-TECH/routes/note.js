import {Router} from 'express';
import { addNote, getNotes, putNote, deleteNote } from '../controller/note.controller.js';
const router = Router();

/**Rutas del crud para notas
 * /all obtiene la lista de todas las notas en base de datos
 */
router.get('/all', getNotes);
/** add recibe una objeto nota y lo guarda en base de datos */
router.post('/add', addNote);
/**recibe un body y un dato por parametro actualizar una nota */
router.put('/edit/:id', putNote);
/**Recibe por parametro un id de un documento nota para eliminarlo de base de datos */
router.delete('/delete/:id', deleteNote);


export default router;