const app = require("express")();
const server = require("http").createServer(app);


//Make server and Client Interact 
const io = require("socket.io")(server, { cors: { origin: "*" } }) // integrate our http server with a new instance of socket.io
// server.get('/', (req, res) => res.send('Welcome to the Quizzo server'))

io.on('connection', socket => {
    console.log("'Ello, who's this we got here?") // runs when client first connects

    socket.on("disconnect", socket => { // runs when client disconnects
        console.log("K bye then");
    });
});


module.exports = server