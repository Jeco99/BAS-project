const  postgres  =  require("postgres");

const sql = postgres({ 
    host:'localhost',
    port:5432,
    database: 'BAS',
    username: 'postgres',
    password:'postgres'
})

module.exports = sql;