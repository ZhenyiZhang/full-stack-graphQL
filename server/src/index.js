require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});


server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});