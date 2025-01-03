import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const RegisteredUserScheme = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// static signup method
RegisteredUserScheme.statics.signup = async function (
  username,
  email,
  password
) {
  // validate
  if (!username || !password || !email) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Not a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Not a strong password");
  }

  // email already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // store the user in db
  const user = await this.create({ username, email, password: hashedPassword });

  return user;
};

// LOGIN

RegisteredUserScheme.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

export default mongoose.model("RegisteredUser", RegisteredUserScheme);
