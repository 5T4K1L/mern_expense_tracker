import SalaryModel from "../models/SalaryModel.js";

export const setSalary = async (req, res) => {
  SalaryModel.create(req.body)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
};

export const getSalary = async (req, res) => {
  const { email } = req.query;
  SalaryModel.findOne({ email })
    .then((salary) => res.status(200).json(salary))
    .catch((error) => res.status(500).json({ error: error.message }));
};
