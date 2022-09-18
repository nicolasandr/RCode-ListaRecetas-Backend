import { Router } from 'express';
import {crearReceta} from '../controllers/listarecetas.controllers'
const router = Router();

//rutas de la lista de recetas
router.route('/')
// .get(crearReceta)
.post(crearReceta);

export default router;
