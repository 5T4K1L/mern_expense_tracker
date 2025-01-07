import mongoose from "mongoose";

const ArchivedScheme = new mongoose.Schema({
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

const ArchivedExpenses = mongoose.model("Archive", ArchivedScheme);
export default ArchivedExpenses;
