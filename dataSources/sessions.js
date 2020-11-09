const {DataSource} = require('apollo-datasource');
const sessions = require('../data/sessions.json');
const _ = require('lodash')

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize = (config) => {
        
    }

    getSessions = (args) => { 
        return _.filter(sessions, args);
    };

    getSessionById = (id) => {
        const session = _.filter(sessions, {id: parseInt(id)})[0]; 
        return session;
    }
}

module.exports = SessionAPI;