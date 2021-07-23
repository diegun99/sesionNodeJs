const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

// sesion propiedades
app.use(session({
    secret : 'ESTO ES SECRETO',
    resave : true,
    saveUninitialized: true

}));

//rutas
app.get('/',(req,res)=>{
    req.session.cuenta = req.session.cuenta ? req.session.cuenta +1 : 1;
    res.send(`Hola! Has visto esta pagina : ${req.session.cuenta}`);

});

app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");

});