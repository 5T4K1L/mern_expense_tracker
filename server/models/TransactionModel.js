import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true,
    max: 100,
  },
  email: String,
  amount: String,
  category: String,
  date: String,
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
