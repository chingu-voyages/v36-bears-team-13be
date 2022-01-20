// eslint-disable-next-line @typescript-eslint/no-var-requires
const { query } = require('../database/config');

export default async function getAllUsers(): Promise<unknown> {
  const sqlString = 'SELECT * FROM user;';
  const adverts = await query(sqlString);
  return adverts.rows[0];
}

// export async function addUser(): Promise<unknown> {
//     const sqlString = 'INSERT INTO user'
// }
