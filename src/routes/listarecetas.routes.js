import { Router } from 'express';
import {crearReceta} from '../controllers/listarecetas.controllers'
const router = Router();

//rutas de la lista de recetas
router.route('/')
.get(crearReceta);

export default router;
