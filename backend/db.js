const { Pool } = require('pg'); 
const pool = new Pool({ 
user: 'postgres', 
host: 'localhost', 
database: 'BAS', 
password: 'postgres', 
port: 5432, 
}); 