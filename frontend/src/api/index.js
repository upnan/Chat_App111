//包含我们的 WebSocket 连接代码。

var socket= new WebSocket("ws://localhost:8080/ws");

//连接到相关的websocket端点并侦听事件
let connect = cb =>{
    //添加cb参数，每当我们收到消息，该cb都会被调用，都会唤醒下一行
    console.log("connecting");

    socket.onopen = () =>{
        console.log("Successfully Connected");
    };

    socket.onmessage = msg =>{
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event =>{
        console.log("Socket Closed Connection: ",event);
    };

    socket.onerror = error =>{
        console.log("Socket Error: ",error);
    }; 
};

//允许我们发送消息，通过websocket连接从我们的前端到后端socket.end（）。
let sendMsg = msg =>{
    console.log("sending msg: ",msg);
    socket.send(msg);
};

export{connect,sendMsg};