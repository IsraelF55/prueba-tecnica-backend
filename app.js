const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
require('dotenv').config()

// Initialization
const app = express()
app.set('port', process.env.PORT || 4000)
const empleados_routes = require('./routes');

const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

//Middleware
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send(`Bienvenido a la API de Recursos Humanos de Menita! Las consultas a los endpoints son en http://localhost:${app.get('port')}/api/v1/empleados`);
});
app.use('/api/v1/empleados', empleados_routes);

//Server Running
app.listen(app.get('port'), () => {
  console.log('Server corriendo en el puerto: ', app.get('port'));
})