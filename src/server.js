import http from 'node:http'


const users = []

const server = http.createServer((req, res) => {
  
  const {method, url} = req
  
    if (method === 'GET' && url === '/users') {
      return res
        .setHearder ('Content-Type', 'aplication/json')
        .end(JSON.stringify(users))
}
    if (method === 'POST' && url === '/users') {
      users.push({
        id: 1,
        name: 'John Doe',
        email: "johndoe@email.com"
      })

      return  res.end("Criacao de usuario")
    }
    return res.end('Hello World')
  })


  server.listen(3333, () => {
    console.log('🔥 Server is running at http://localhost:3333')
  })