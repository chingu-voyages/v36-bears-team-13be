import express from 'express';
import { getAllUsers } from '../models/adverts';

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await getAllUsers();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.send(`Error ${err}`);
  }
});

export default router;
