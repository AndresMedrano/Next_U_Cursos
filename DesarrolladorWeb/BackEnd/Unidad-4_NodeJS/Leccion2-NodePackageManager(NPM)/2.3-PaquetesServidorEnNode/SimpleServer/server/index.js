// console.log('Saludos desde Node')

var http = require('http')

var PORT = 8085

function handleRequest(req, res) {
	res.end('Funcionando Correctamente, Recurso pedido: '+req.url)
}

var Server = http.createServer(handleRequest)
server.listen(PORT,function() {
	console.log('Server is listening on port: '+PORT)
})
