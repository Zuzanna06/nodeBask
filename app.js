const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const port = 3000;
const listeRoutes = require('./routes/listeRoutes');
const optionBDD = {
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  port: 3306,
  database: 'todolist'
}


app.use(myConnection(mysql,optionBDD,'pool'));
app.use(express.static('public')); //definition des resources static
app.set('views','./IHM'); // définition du chemin de mes views
app.set('view engine','ejs'); // définition du moteur de render ou de views ou de templates
app.use(express.urlencoded({extended : false}))
app.use(listeRoutes); // j'utilise le component d'acces aux donnaeés pour liste

  app.get('/a-propos', (req, res)=>{
    res.status(200).render('apropos')
  });
  
  app.use((req, res)=>{
    res.status(404).render('pageintrouvable')
  });
  
  app.listen(port, ()=>{
    console.log("Server listening on port " + port);
  });




// const express = require('express');
// const app = express();
// const port = 3000;
// const humain = {
//     name: "Zuzanna",
//     age:44
// };
// const liste = [
//     {titre: 'apprendre NodeJs', description: 'Node c\'est la vie'},
//     {titre: 'apprendre express', description: 'Express c\'trop cool'}
// ]


// app.use(express.static('public'))
// app.set('views', './IHM')//definition du chemin de mes views
// app.set('view engine', 'ejs')//definition du moteur de views

// app.get('/', function (req, res) {
//     res.status(200).render('index', {humain, liste})
// })
// app.get('/a-propos', function (req, res) {
//     res.status(200).render('apropos', {humain})
// })
// app.get('/index', function (req, res) {
//     res.status(200).render('index', {humain})
// })
// app.use((req, res) => {
//     res.status(404).render('404')
// })

// app.listen(port, () => {
//     console.log("Server listening on port " + port);
// })