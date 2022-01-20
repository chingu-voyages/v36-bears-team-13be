import { Advert } from '@src/utils/databaseTypes';

const { query } = require('../database/config');

export async function getAllAdverts(): Promise<Advert> {
  const sqlString = 'SELECT * FROM advert;';
  const adverts = await query(sqlString);
  return adverts.rows;
}
export async function addNewAdvert(advert: Advert): Promise<Array<Advert> | null> {
  const sqlString =
    'INSERT INTO advert (title, description,price,area,availability,experience) VALUES($1,$2,$3,$4,$5,$6) RETURNING id;';
  try {
    const response = await query(sqlString, [
      advert.title,
      advert.description,
      advert.price,
      advert.area,
      advert.availability,
      advert.experience,
    ]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
  }
  return null;
}

// TODO: functions to UPDATE / DELETE adverts
