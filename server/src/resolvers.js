module.exports = {
    Query: {
        launches: (_, __, {dataSources}) => dataSources.LaunchAPI.getAllLaunches(),
        launch: (_, {id}, {dataSources}) => dataSources.LaunchAPI.getLaunchById({LaunchId: id}),
        me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};