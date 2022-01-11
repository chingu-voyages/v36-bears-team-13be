import express from 'express';
//Import model to talk to the database and find adds
import getAllAdverts from '../models/adverts';
const router: express.Router = express.Router();

router.get('/', async (req, res) => {
	try {
		//Get adverts from DB
		const result = await getAllAdverts();
		// const results = { results: result ? result.rows : null };
		res.send(result);
	} catch (err) {
		console.error(err);
		res.send('Error ' + err);
	}
});

router.post('/', (req, res) => {
	res.json({});
});

module.exports = router;