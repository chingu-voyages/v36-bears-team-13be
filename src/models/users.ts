import { User } from '@src/utils/databaseTypes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { User } from '@src/utils/databaseTypes';

const { query } = require('../database/config');

export default async function getAllUsers(): Promise<User> {
  const sqlString = 'SELECT * FROM "user";';
  const adverts = await query(sqlString);
  return adverts.rows[0];
}

export async function getUserByEmail(email: string): Promise<Array<User>> {
  const sqlString = 'SELECT * FROM "user" WHERE email = $1;';
  const { rows: usersFound }: { rows: Array<User> } = await query(sqlString, [email]);
  return usersFound;
}

export async function addUser(user: User): Promise<number> {
  const sqlString =
    'INSERT INTO "user" (username,first_name,last_name,email,password,role,gender,phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id; ';
  const { rows: ids }: { rows: Array<{ id: number }> } = await query(sqlString, [
    user.username,
    user.first_name,
    user.last_name,
    user.email,
    user.password,
    user.role,
    user.gender,
    user.phone,
  ]);
  return ids[0].id;
}
