const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./dataSources/sessions')

const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`GraphQL server running at ${url}`);
});