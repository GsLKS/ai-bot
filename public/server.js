var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   

   response.end('Online\n');
}).listen(8080);


console.log('servidor inicializado na porta 8080');
// Baseado no código padrão do app "astro - nodejs"
