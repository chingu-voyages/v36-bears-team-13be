// postgress pool
const { query } = require('../database/config');

export default async function getAllAdverts() {
	try {
		const sqlString: string = 'SELECT * FROM advert;';
		const adverts = await query(sqlString);
		return adverts.rows[0];
	} catch (error) {
		console.error(error);
	}
}
