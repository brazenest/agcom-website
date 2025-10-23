import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } from "./constants";

const { Sequelize } = require('sequelize');

export const queryDatabase = async ({ query }) => {

    // Option 3: Passing parameters separately (other dialects)
    const sequelize = new Sequelize(
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        {
            host: DB_HOST,
            dialect: DB_DIALECT,
        },
    );

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const data = {}

    await sequelize.close()

    return data
}