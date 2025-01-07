import ArchivedExpenses from "../models/ArchivedExpenses.js";
import TransactionModel from "../models/TransactionModel.js";

// create
export const createTransaction = (req, res) => {
  TransactionModel.create(req.body)
    .then((transaction) => res.json(transaction))
    .catch((error) => res.json(error));
};

// read
export const readTransaction = (req, res) => {
  const { email } = req.query;
  TransactionModel.find({ email })
    .then((transactions) => res.status(200).json(transactions))
    .catch((error) => res.status(500).json({ error: error.message }));
};

// Update transaction
export const updateTransaction = (req, res) => {
  const { id } = req.query;
  const updateData = req.body;

  TransactionModel.findByIdAndUpdate(id, updateData, { new: true })
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).json({ error: "Transaction not found" });
      }
      res.status(200).json(transaction);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

// delete transaction
export const deleteTransaction = (req, res) => {
  const { id } = req.query;
  TransactionModel.deleteOne({ _id: id })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json({ error: error.message }));
};

// delete all
export const deleteAllTransaction = (req, res) => {
  const { email } = req.query;
  TransactionModel.deleteMany({ email })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json({ error: error.message }));
};

// delete all every transaction of third of the month
export const deleteThirdTransaction = (req, res) => {
  const { email } = req.query;
  const { thirdOfMonth } = req.query;
  const { expenseName } = req.query;
  const { date } = req.query;
  const { category } = req.query;
  const { amount } = req.query;
  ArchivedExpenses.create({ expenseName, email, date, category, amount })
    .then((response) => {
      return TransactionModel.deleteMany({ email, thirdOfMonth }).then(() =>
        res.status(200).json(response)
      );
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
