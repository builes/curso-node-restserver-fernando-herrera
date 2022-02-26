// require("dotenv").config();
// const express = require("express");

// const app = express();

// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("hola");
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//-----------------------------------------------------------//-------------------------------
// Inicializando el servidor con una clase

const Server = require("./models/server");

//Asi creamos una instancia de la clase server
const server = new Server();

//Luego llamamos al metodo .listen de la clase server
server.listen();
