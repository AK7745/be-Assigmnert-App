import { User } from "../entities/user-entity.js";
import { generateToken } from "../middlewares/auth.js";

const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const accessToken = generateToken(email);

    return res.status(200).json({ data: { email: user.email, accessToken }, message: 'Signin successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

const createCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const create = await User.create({ email, password });
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};

export { sigin, createCredentials };
