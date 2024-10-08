

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
const server = fastify()
const database = new DatabaseMemory()
server.post('/videos', (request, reply) => {
  database.create({
    title: 'Video 01',
    description: 'Esse é o vídeo 01',
    duration: 100,
  })
  console.log(database.list())
  return reply.status(201).send()
})


// server.post('/', () => {
//   return 'Hello World'
// })

server.get('/hello', () => {
  return 'olá Senai'
})

server.put('/node', () => {
  return 'Hello Node.js'
})

server.delete('/node', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
})