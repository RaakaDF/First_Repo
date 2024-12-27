const fs = require('fs');
const http = require('http');
const port = 8181

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error) {
            res.writeHead(404)
            res.write('Erreur, cette page est introuvable')
        } else {
            res.write(data)
        }
        res.end()
    })
    /*res.write('Hello World')*/
})

server.listen(port, function(error) {
    if(error) {
        console.log("une erreur s'est produte", error);
    } else {
        console.log("server started on port :" + port);
    }
})
