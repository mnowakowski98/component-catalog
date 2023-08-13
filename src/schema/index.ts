import gql from 'graphql-tag'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import fileSystem from 'fs'

// Start apollo server 
async function startApolloServer() {
    const qlFileNames = fileSystem.readdirSync('./ql')
    const qlFiles = qlFileNames.map(file => fileSystem.readFileSync(`./ql/${file}`).toString())
    const typeDefs = gql(qlFiles.reduce((previous, file) => previous+file))

    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs })
        })
    })
    const { url } = await startStandaloneServer(server)
    console.log(`Server started on ${url}`)
}
startApolloServer()