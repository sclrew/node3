const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {

    console.log('request made')
    console.log(req.url, req.method)

    // res.setHeader('Content-type', 'text/plain')
    res.setHeader('Content-type', 'text/html')
    // res.write('<h1>we live in Russia</h1>')
    // res.end()

    let path = './views/';

    switch(req.url){
        case '/':
            path+= 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':           
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }


    // fs.readFile('./views/index.html', (err, data) =>{
    fs.readFile(path, (err, data) =>{
        if (err) {
           console.log(err)
           res.end()
       } else {
           res.write(data)
           res.end()
        //    res.statusCode = 200
       }
    })



})

server.listen(3000, 'localhost', () => {
    console.log(' listening for request on port 3000 ')
})