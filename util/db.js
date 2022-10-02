import { Pool } from 'pg';
import keys from '../config/env';

let conn;
const connectionString = keys.database;
if (!conn) {
    conn = new Pool({
        connectionString,
    });
}

export default conn;
