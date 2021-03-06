const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  //Get token from header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
