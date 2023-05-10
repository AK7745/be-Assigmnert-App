import crypto from "crypto";
import Jwt from "jsonwebtoken";
import { WEB_TOKEN_SECRET } from "../constants.js";
const secret = WEB_TOKEN_SECRET;

export const generateToken = (email) => {
  const payload = { email };
  const options = { expiresIn: "1h" };
  return Jwt.sign(payload, secret, options);
};

export const authenticate = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  console.log(token);
  if(!token) {
    return res.status(401).json({ error:"Please SignIn"})
  }
  Jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    console.log(decoded)
    next();
  });
};
