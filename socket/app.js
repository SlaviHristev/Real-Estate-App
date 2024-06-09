import {Server} from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:5173",

    },
});

let onlineUser = [];



io.on("connection", (socket) =>{
    
});

io.listen('4000');
