import http from 'node:http'

const user = [{"name": "Gabriel Niz", "email": "gabriel@email.com"}]

const server = http.createServer((req, res) => {
  
    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'aplication/json' })
        res.end(JSON.stringify(user))
}})
  server.listen(3333, () => {
    console.log('🔥 Server is running at http://localhost:3333')
  })