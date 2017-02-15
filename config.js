 var config = {};

config.db = {};
config.db.host = "localhost";
config.db.user = "root";
config.db.password = "root";
config.db.database = "luunode";
config.db.port = 3306;

module.exports.config = config;
module.exports.config.db = config.db;
