import jwt from "jsonwebtoken";
import RegisteredUser from "../models/RegisteredUser.js";

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    // grab id from the token by verifying
    const { _id } = jwt.verify(token, process.env.SECRET);

    // find user from the database
    req.user = await RegisteredUser.findOne({ _id }).select("_id");
    next(); // run the next middleware
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request unauthorized" });
  }
};

export default requireAuth;
