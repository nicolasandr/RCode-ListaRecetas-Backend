import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//instancia de express
const app = express();

//queremos tomar el puerto de la pc
app.set('port', process.env.PORT || 4000);

//quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log('Estamos en el puerto ' + app.get('port'));
});

 //middlewares
app.use(morgan('dev'));
app.use(cors('dev')); //permite recibir conexiones remotas
//middlewares para procesar el objeto json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cargamos archivo estatico
app.use(express.static('./public'));

//rutas

app.get('/',(req,res)=>{
 res.send('primera peticion get listarecetas')
})
