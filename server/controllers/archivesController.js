import ArchivedExpenses from "../models/ArchivedExpenses.js";

export const readArchives = (req, res) => {
  const { email } = req.query;
  ArchivedExpenses.find({ email })
    .then((archive) => res.status(200).json(archive))
    .catch((error) => res.status(500).json({ error: error.message }));
};

export const deleteArchives = (req, res) => {
  const { email } = req.query;
  ArchivedExpenses.deleteMany({ email })
    .then((archive) => res.status(200).json(archive))
    .catch((error) => res.status(500).json({ error: error.message }));
};
