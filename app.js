const express = require('express')
const os = require('os')

const app = express()

app.set('view engine', 'ejs')

app.set('views', 'myviews')

app.listen(3000)

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname})

    const blogs = [
        {title : 'Yoshi find egg', snippet: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo a in sit unde iure? '},
        {title : 'Peter has lost his left boot', snippet: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo a in sit unde iure? '},
        {title : 'Mokosha loos on stars', snippet: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo a in sit unde iure? '}
    ]

    res.render('index', { title : 'Home', blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title : 'About' })
})

const freemem = os.freemem()
const interface = os.networkInterfaces()


console.log(interface.enp2s0)
//  console.log(interface.enp2s0[0].address)

app.get('/contact', (req, res) => {
    res.render('contact', {
         title : 'Contact', 
         freemem,
         lanadress :  interface.enp2s0[0].address})
})

app.use((req, res) => {    
    res.status(404).render('404', { title : '404' })
})


