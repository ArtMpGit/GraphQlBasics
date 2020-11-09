module.exports = {
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