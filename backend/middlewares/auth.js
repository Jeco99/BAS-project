import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export default function generateToken(user, expiresIn = "7d") {
    const payload = {
        user_name:user.user_name,
    }
  return jwt.sign(payload, JWT_SECRET, {expiresIn});
}

