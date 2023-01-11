import { Sequelize } from "sequelize";

const db = new Sequelize('Pagination_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;