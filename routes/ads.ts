import express from 'express';
//Import model to talk to the database and find adds
const router: express.Router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Hi',
	});
});
router.post('/', (req, res) => {
	res.json({});
});

module.exports = router;
