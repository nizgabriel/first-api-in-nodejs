import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, World!\n')})


  server.listen(3333, () => {
    console.log('server is running on port 3333')
  })