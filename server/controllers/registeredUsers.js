import RegisteredUser from "../models/RegisteredUser.js";
import jsonwebtoken from "jsonwebtoken";

// JWT
const createToken = (_id) => {
  return jsonwebtoken.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// signup
export const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await RegisteredUser.signup(username, email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegisteredUser.login(email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
