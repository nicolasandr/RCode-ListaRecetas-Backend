import mongoose, { Schema } from 'mongoose';

const usuarioschema = new Schema({
    administrador: {
        type: String,
        required: true,
        unique: true,
    },
    claveadmin: {
        type: String,
        equired: true,
    },
});

const Usuario = mongoose.model('usuario', usuarioschema);

export default Usuario;