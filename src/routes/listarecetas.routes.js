import { Router } from 'express';
import {crearReceta, editarReceta, listaRecetas, obtenerReceta} from '../controllers/listarecetas.controllers'
const router = Router();

//rutas de la lista de recetas
router.route('/receta')
.get(listaRecetas)
.post(crearReceta)

router.route('/receta/:id')
.get(obtenerReceta)
.put(editarReceta);

export default router;
