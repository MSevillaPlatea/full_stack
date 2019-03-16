let http = require('http');
let routes = require('./routes');


http
    .createServer(function(request, response) {

        let method = request.method.toLowerCase();

        let path = request.url.toLowerCase().replace('/', '');

        let routes[method][path]




        response.write(http).end();
    })
    .listen(3000);

/*  if (request.method == "GET") {
     switch (request.url) {
         case '/':
             response.write('<h1>inicio</h1>');
             break;
         case '/contacto':
             response.write('<h1>contacto</h1>');
             response.write(form);
             break;
         default:
             break;
     }
     response.write("<h1>GET</h1>");
 } else if (request.method == "POST") {
     response.write("<h1>POST</h1>");
     response.write("<h2>formulario enviado</h2>");

 } else {
     response.writeHead(404);
 } */
//response.end();





//
// ────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E F E R E N C I A S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//


/*  console.log(request.method);
 console.log(request.url);
 console.log(request.socket.localAddresss); */

/* response.write('<h1>Holafdsfdsfds</h1>');

response.end('ggergergregre'); */

/* console.log(request); */