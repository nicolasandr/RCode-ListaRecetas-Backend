import { Router } from 'express';
import {crearReceta, listaRecetas, obtenerReceta} from '../controllers/listarecetas.controllers'
const router = Router();

//rutas de la lista de recetas
router.route('/receta')
.get(listaRecetas)
.post(crearReceta)

router.route('/receta/:id')
.get(obtenerReceta);

export default router;
