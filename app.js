const express = require("express");
const { url } = require("inspector");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;



app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res)=>{
    res.render('home.pug');
})
app.get('/snake', (req, res)=>{
    res.render('snake.pug');
})
app.get('/tictactoe', (req, res)=>{
    res.render('tic-tac-toe.pug');
})
app.get('/help', (req, res)=>{
    res.render('help.pug');
})
 
app.listen(port,()=>{
    console.log(`THis application started succesfully on port ${port}`);
})