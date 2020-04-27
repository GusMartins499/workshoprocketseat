const express = require('express')
const server = express();

//configurar arquivos estáticos
server.use(express.static("public"))

server.get("/", (req, res) => {
    //return res.json({ message: 'Hello RocketSeat !' })
    return res.sendFile(__dirname + "/index.html")
})

server.listen(3333);