module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://admin:Personne15@clusterblob-shard-00-00-thlyu.mongodb.net:27017,clusterblob-shard-00-01-thlyu.mongodb.net:27017,clusterblob-shard-00-02-thlyu.mongodb.net:27017/test?ssl=true&replicaSet=ClusterBlob-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true
      },
    },
  },
});
