import { User } from "../entities/user-entity.js";
import { generateToken } from "../middlewares/auth.js";

const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const accessToken = generateToken(email);

    return res.status(200).json({
      data: { email: user.email, accessToken },
      message: "Signin successful.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

const createCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const create = await User.create({ email, password });
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { newPassword, currentPassword } = req.body;
    const { email } = req.user;
    const check = await User.findOne({ where: { email } });
    if (!check) {
      return res.status(404).json({ error: "User not Found" });
    }
    if (check.password !== currentPassword) {
      return res.status(400).json({ error: "Incorrect current password" });
    }
    const [rowsAffected] = await User.update(
      { password: newPassword },
      {
        where: {
          id: check.id,
          deleted: false,
        },
      }
    );
    res
      .status(200)
      .json({ success: true, message: "password updated successfully" });
  } catch (error) {
    res.status(500).json({ success:false, error: error.message });
  }
};
export { sigin, createCredentials ,updatePassword};
