module.exports = {
  development: {
    username: 'xsandr',
    password: 123,
    database: 'test3',
    host: '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
