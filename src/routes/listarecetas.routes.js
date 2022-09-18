import { Router } from 'express';
import {crearReceta, listaRecetas} from '../controllers/listarecetas.controllers'
const router = Router();

//rutas de la lista de recetas
router.route('/')
.get(listaRecetas)
.post(crearReceta);

export default router;
