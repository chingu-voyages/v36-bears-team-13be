import { User } from '@src/utils/databaseTypes';
import { getUserByEmail, addUser } from '@src/models/users';
import express from 'express';
import bcrypt from 'bcrypt';
import generateJwtToken from '@src/utils/jwtGenerator';

const router: express.Router = express.Router();

router.get('/', (req, res): void => {
  res.json({
    success: true,
    message: 'Auth endpoint',
  });
});

router.post('/register', async (req, res): Promise<void> => {
  const newUser: User = req.body;
  try {
    const isAlreadyRegistered = (await getUserByEmail(newUser.email)).length > 0;

    if (isAlreadyRegistered) {
      res.status(401).json('E-mail already registered');
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const newUserId = await addUser({ ...newUser, password: hashedPassword });
    const jwtToken = generateJwtToken(newUserId);
    res.json({ jwtToken });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
