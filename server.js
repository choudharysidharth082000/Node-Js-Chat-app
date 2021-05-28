const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const port = process.env.PORT || 3000;


app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
io.on('connection', (socket)=>
{
    console.log('User Connected');
    socket.on('disconnect', ()=>
    {
        console.log('User Left');
    })
    socket.on('chatname', (nameing)=>
    {
        console.log('User : ', nameing);
        socket.broadcast.emit('joined-user', nameing);
    })
    socket.on('chatmessage', (message)=>
    {
        console.log(message);
        socket.broadcast.emit('chatting', message);
    })
})
server.listen(port, () => {
  console.log(`Listening on PORT : ${port}`);
});



// server sending the values io.on
// client sending the value socket.on

//server emiting the values io3.emit
// client emitting the value socket.emit