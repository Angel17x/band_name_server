import 'reflect-metadata';
import express from "express";
import http from "http";
import { fileURLToPath } from 'url';
import { Server } from "socket.io";
import path from 'path';
import loadConfig from "./infrastructure/config/config.js";

const app = express();
const conf = loadConfig('./config.yaml');

// Settings
const __filename = fileURLToPath(import.meta.url);   
const __dirname = path.dirname(__filename);
const port = process.env.PORT || conf.server.port;
const publicPath = path.resolve(__dirname, '../public'); // Asegúrate de que la ruta es correcta
app.use(express.static(publicPath));
 
// Socket.io
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', (client:any) => { 
  console.log('Un cliente se ha conectado');

  client.on('disconnect', () => {
    console.log('Un cliente se ha desconectado'); 
  });

  // Ejemplo de manejo de eventos personalizados
  client.on('message', (msg:any) => {
    console.log('Mensaje recibido:', msg);

    client.emit('message', { server: 'receipt data test' });
  });
});

// Starting the server
server.listen(port, () => console.log(`Running server on port ${port}`));