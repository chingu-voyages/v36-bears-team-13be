// eslint-disable-next-line @typescript-eslint/no-var-requires
import { User } from '@src/utils/databaseTypes';

const { query } = require('../database/config');

export default async function getAllUsers(): Promise<User> {
  const sqlString = 'SELECT * FROM "user";';
  const adverts = await query(sqlString);
  return adverts.rows[0];
}

// export async function addUser(): Promise<unknown> {
//     const sqlString = 'INSERT INTO user'
// }
