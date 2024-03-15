
import {io} from 'socket.io-client';

const url = "ws://localhost:9000";
const socketClient = io(url);

socketClient.on('message', (msg)=> {
    console.log("#1: Server says: ", msg);
});

function onMessage2(msg:string) {
    console.log("#2: Server says: ", msg);

}

socketClient.on('message', onMessage2);


socketClient.off('message', onMessage2);

socketClient.connect();

socketClient.send("Hello World!");
socketClient.emit('question', "How are you?");

setTimeout(()=> {socketClient.close()}, 10000);