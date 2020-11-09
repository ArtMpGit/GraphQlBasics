const {gql} = require("apollo-server")

// O ! após certos tipos indica que aquele campo é obrigatório

module.exports = gql`
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