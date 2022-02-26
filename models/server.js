require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/userRoute");

// Asi inicializamos el servidor con clases
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middleawares, son funciones que siempre se ejecutan cuando arrancamos el servidor
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //   Directorio publico
    this.app.use(express.static("public"));

    //cors
    this.app.use(cors());

    //Con este middleware decimos que vamos a recibir la informacion en formato json
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/usarios", userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
