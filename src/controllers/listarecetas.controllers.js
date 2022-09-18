import Receta from '../models/receta';

export const crearReceta = async (req, res) => {
    //esto se agrega
    try {
        console.log(req.body);
        //validacion
        //crear un objeto para guardar en la BD
        const nuevaReceta = new Receta({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes
        });
        //guardar efectivamente en la BD
        await nuevaReceta.save();
        //enviar respuesta al frontend
        res.status(201).json({
            mensaje: 'La receta fue creada exitosamente',
        });
        // si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'La receta enviada no pudo ser creada',
        });
    }
};

export const listaRecetas = async (req, res) => {
    try {
        //buscar en la BD la coleccion de recetas
        const listaRecetas = await Receta.find();
        //enviar la respuesta
        res.status(200).json(listaRecetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos',
        });
    }
};

export const obtenerReceta = async (req, res) => {
    try {
        //buscamos el id que todavia no tenemos
        console.log(req.params.id);
        //buscar en la BD la coleccion de recetas
        const RecetaBuscada = await Receta.findById(req.params.id);
        //enviar la respuesta
        res.status(200).json(RecetaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las recetas',
        });
    }
};

export const editarReceta = async (req, res) => {
    try {
        //validacion
        //buscar la receta por id y luego modificarla
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La receta fue modificada',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar la receta',
        });
    }
};
export const borrarReceta = async (req, res) => {
    try {
        //buscar la tarea por el id en la collection de productos de la BD y luego borrar
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La Receta fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'error al intentar buscar la tarea',
        });
    }
};

