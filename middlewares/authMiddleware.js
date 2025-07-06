import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next(); // continue to route
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  } else {
    return res.status(401).json({ error: "Token missing from header" });
  }
};

export default protect;
