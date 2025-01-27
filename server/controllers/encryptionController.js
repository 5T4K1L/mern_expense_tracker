import bodyParser from "body-parser";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const key = process.env.KEY;

// encrypt
export const encrypt = (req, res) => {
  const { data, key } = req.body;

  if (!data || !key) {
    return res
      .status(400)
      .json({ error: "Missing data or key in the request body." });
  }

  try {
    const cipherText = CryptoJS.AES.encrypt(data, key).toString();
    res.json({ encrypted: cipherText });
  } catch (error) {
    res.status(500).json({ error: "Encryption failed." });
  }
};

// decrypt
export const decrypt = (req, res) => {
  const { data, key } = req.body;

  if (!data || !key) {
    return res
      .status(400)
      .json({ error: "Missing data or invalid key in the body." });
  }

  try {
    const bytes = CryptoJS.AES.decrypt(data, key);

    if (bytes.sigBytes > 0) {
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      res.json({ decrypted: decryptedData });
    }
  } catch (error) {
    res.json({ error: "Decryption Failed Invalid Key" });
  }
};

export default app;
