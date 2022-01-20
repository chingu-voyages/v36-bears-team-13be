import express from 'express';
import { Advert } from '@src/utils/databaseTypes';
import { getAllAdverts, addNewAdvert } from '@src/models/adverts';

const router: express.Router = express.Router();

router.get('/', async (req, res): Promise<void> => {
  try {
    //  Get adverts from DB
    const result: Advert = await getAllAdverts();
    // const results = { results: result ? result.rows : null };
    res.json({
      success: true,
      message: 'All the adverts.',
      payload: result,
    });
  } catch (err) {
    console.error(err);
    res.send(`Error ${err}`);
  }
});

router.post('/', async (req, res): Promise<void> => {
  const newAdvert: Advert = req.body;
  const newAdvertId = await addNewAdvert(newAdvert);
  res.json({
    success: true,
    message: 'Added a new advert',
    payload: newAdvertId,
  });
});

export default router;
