import mongoose from "mongoose";

const SalaryScheme = new mongoose.Schema({
  salary: String,
  email: String,
});

const Salary = mongoose.model("Salary", SalaryScheme);
export default Salary;
