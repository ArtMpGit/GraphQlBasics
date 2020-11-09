const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./dataSources/sessions')


// O ! após certos tipos indica que aquele campo é obrigatório
const typeDefs = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
    ): [Session]
    sessionById(id: ID): Session
}
type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Too many sessions does not fit into a track, so that will be changed to tags in the future.")
    level: String
}`;

const resolvers = {
    Query: {
        /**
         * Args -> parâmetros que podem ser passados para a filtragem do que vai ser
         * recebido da query em questão;
         */
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`GraphQL server running at ${url}`);
});