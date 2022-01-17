// eslint-disable-next-line @typescript-eslint/no-var-requires
const { query } = require('../database/config');

type IAdvert = {
  id: number;
  title: string;
  description: string;
};

export default async function getAllAdverts(): Promise<IAdvert> {
  const sqlString = 'SELECT * FROM advert;';
  const adverts = await query(sqlString);
  return adverts.rows[0];
}
