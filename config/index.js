import { createPool } from "mysql";
import { config } from "dotenv";

config()
let connection = createPool({
    host : process.env.HOST,
    database : process.env.DBname,
    user : process.env.User,
    password : process.env.UserPass,
    multipleStatements : true,
    
    connectionLimit : 30
})


export {
    connection
}