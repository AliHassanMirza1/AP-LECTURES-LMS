/*
Topics Covered:
    -Socket programming using socket.io
    -Custom messages
    -Event handlers for different types of messages
*/

/*
npm install http
npm install socket.io
npm install socket.io-client
npm install typescript @types/socket.io
*/

import http from 'http';
import {Server, Socket} from 'socket.io';

const httpServer= http.createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log("A new client connected: ", socket.id);

    socket.on('message', (msg)=> {
        console.log("Message: ", msg, " from client ", socket.id);
        socket.send("Welcome!");
        socket.broadcast.emit('message', "Message for all");
    });

    //Custom messages.
    socket.on('question', (question)=> {
        console.log("Question: ", question);
    });

    socket.on('disconnect', ()=>{
        console.log("Disconnected: ", socket.id);
    });
}



);





const PORT = 9000;
httpServer.listen(PORT, ()=> {console.log("Server listening on port", PORT);});
//io.listen(PORT);
