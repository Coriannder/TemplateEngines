const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class Contenedor {
    constructor(){
        this.id = 3;
        //Productos cargados por defecto
        this.arrayProductos = [{id: 1 , title: 'Paper plane' , price: 100 , thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-512.png'},
                               {id: 2 , title: 'Ruler' , price: 200 , thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-512.png'},
                               {id: 3 , title: 'Pen' , price: 125 , thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-512.png' }]
    }}
const contenedor1 = new Contenedor;



//----------------Configuracion Handlebars----------------------------

/* app.set('views', './views/handlebars')
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        layoutsDir: "./views/handlebars/layouts",
        partialsDir: "./views/handlebars/partials",
        extname: ".hbs"
    })
    );
app.set('view engine', 'hbs') */



//------------------Configuracion PUG---------------------------------//

/* app.set('views', './views/pug')
app.set('view engine', 'pug') */



//------------------Configuracion EJS---------------------------------//

app.set('views', './views/ejs')
app.set('view engine', 'ejs')





app.get('/', (req, res) => {
    res.render('pages/form')    // Para Handlebars o Pug cambiar "pages/form" por form
})


app.post('/productos', (req, res) =>{
    const producto = req.body
    contenedor1.id++
    contenedor1.arrayProductos.push({id: contenedor1.id, ...producto})
    res.redirect('/')
})


app.get('/productos', (req, res) => {
    const productos = contenedor1.arrayProductos
    res.render('pages/productos',{ productos })      // Para Handlebars o Pug cambiar "pages/productos" por productos
})




//------------------Configuracion Server---------------------------------//

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on(`error`, error => console.log(`Error en servidor: ${error}`))