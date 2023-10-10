//TODO: may error
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;
export default function tokenValidator(token) {
  try {
    return {
      isValid: true,
      ...jwt.verify(token, JWT_SECRET),
    };
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      return { isValid: false, error: "Token has already expired" };
    }

    if (e.name === "JsonWebTokenError") {
      return { isValid: false, error: "Token is required" };
    }

    throw e;
  }
}