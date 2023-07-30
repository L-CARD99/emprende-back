const http = require("http"); //Funcion require, para importar codigo/librerias de terceros, o tambien de nosotros.

//console.log(http);

//const nameExportsAnother = require("./another");
//console.log({ nameExportsAnother });

function requestController() {
  //Logica de nuestra funcion
  console.log("----Hola Mundo----");
}

//Configurar nuestro servidor
const server = http.createServer(requestController);

server.listen(4300);
