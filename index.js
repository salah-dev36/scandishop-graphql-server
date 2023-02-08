const { ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema')
const {resolvers} = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port : process.env.PORT || 8080}).then(({url}) =>{
    console.log(`API RUNNING at ${url}`)
})