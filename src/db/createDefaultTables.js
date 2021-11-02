import fs from "fs-extra";
import path from "path";
import pool from "./connect.js";


const table = path.join(process.cwd(), "src/db/tables.sql")

const createDefaultTables = async () => {
    try {

        const buffer = await fs.readFile(table)

        const tableSQL = buffer.toString()

        await pool.query(tableSQL)
        
    } catch (error) {
        console.log(error);
    }
}

export default createDefaultTables;