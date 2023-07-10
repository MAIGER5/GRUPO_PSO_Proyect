const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mainRouter = require('./src/routes/mainRouter');



const app = express();


app.use(express.json({ limit:'10mb' }));  //El middleware express.json() analizará automáticamente el cuerpo de la solicitud si está en formato JSON y lo convertirá en un objeto JavaScript accesible a través de req.body
app.use(express.urlencoded({ limit:'10mb', extended:true }))  //Mientras tanto, el middleware express.urlencoded() analizará el cuerpo de la solicitud si está en formato URL codificada y lo convertirá en un objeto JavaScript accesible a través de req.body.
app.use(cookieParser());
app.use(morgan('combined'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', mainRouter)

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars   //middleware de manejo de errores 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = app;



//Aquí están las razones comunes por las que los middlewares se colocan antes de las rutas:

// Procesamiento previo: Al colocar un middleware antes de las rutas, puedes realizar tareas de procesamiento previo a las solicitudes. Por ejemplo, puedes autenticar y autorizar las solicitudes antes de que se procesen las rutas correspondientes.

// Manipulación de datos: Los middlewares pueden realizar transformaciones o validaciones en los datos de entrada antes de que las rutas los utilicen. Esto puede incluir análisis y validación del cuerpo de la solicitud, verificación de encabezados, manipulación de cookies, etc.

// Configuración global: Algunos middlewares pueden requerir configuraciones globales para todo el servidor. Colocarlos antes de las rutas asegura que se configuren adecuadamente antes de que se manejen las solicitudes.

// Es importante tener en cuenta que el orden de los middlewares y las rutas es crucial, ya que se ejecutan en secuencia. Los middlewares que se colocan antes de las rutas se ejecutan en el orden en que se declaran, desde el primer middleware hasta el último, antes de que una ruta específica se maneje. Por lo tanto, si un middleware responde a una solicitud antes de que alcance una ruta, esa solicitud no se procesará en las rutas siguientes.

// Sin embargo, no existe una regla estricta sobre dónde deben colocarse los middlewares en todos los casos. La ubicación de los middlewares depende de los requisitos y la lógica de tu aplicación. Puedes experimentar y ajustar el orden de los middlewares según tus necesidades para lograr el comportamiento deseado en tu servidor Express.