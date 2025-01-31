import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8080});

wss.on("connection",function connection(ws){
    ws.onerror=function(error){
        console.error("WebSocket error observed:",error);
    }
    ws.on("message",function incoming(message){
        console.log("received: %s",message);
    });

    ws.send("something");
});