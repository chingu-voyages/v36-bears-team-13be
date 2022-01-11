require('dotenv').config();
import { PoolClient, QueryResult } from 'pg';
const { Pool } = require('pg');
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// console.log('asd', process.env.DB_USER);

const pool: PoolClient = new Pool({
	connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
	ssl: { rejectUnauthorized: false },
});

// export default pool.query;

module.exports = {
	query: (
		text: string,
		params: Array<any>,
		callback: (err: Error, result: QueryResult<any>) => void
	) => {
		return pool.query(text, params, callback);
	},
};
