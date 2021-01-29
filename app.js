const express = require("express");
const { url } = require("inspector");
const path = require("path");
const app = express();
const port = 80;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    res.render('home.pug');
})
app.get('/snake-desk', (req, res)=>{
    res.render('game-desk.pug');
})
app.get('/snake-phone', (req, res)=>{
    res.render('game-phone.pug');
})
app.get('/contact', (req, res)=>{
    res.render('contact.pug');
})
app.get('/about', (req, res)=>{
    res.render('about.pug');
})
app.get('/help', (req, res)=>{
    res.render('help.pug');
})
 
//Start Server
app.listen(port,()=>{
    console.log(`THis application started succesfully on port ${port}`);
})