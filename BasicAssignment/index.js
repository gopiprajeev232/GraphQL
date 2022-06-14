const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/schema')
const { tweets, notifications } = require('./db')
const {resolvers} = require('./resolvers/Resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        tweets,
        notifications
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at: "+url)
})