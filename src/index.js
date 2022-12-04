import { createServer } from '@graphql-yoga/node'
import * as fs from "fs"
import db from './db'

const resolvers = {

}
const server = createServer({
    schema: {
      typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'), resolvers
    },
    context: {db: db}
  })

server.start(() => console.log("Servidor executando..."))
