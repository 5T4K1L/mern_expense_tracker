import TransactionModel from "../models/TransactionModel.js";
import ArchivedExpenses from "../models/ArchivedExpenses.js";

export const getMonth = async (req, res) => {
  const { email } = req.query;
  try {
    const transactions = await TransactionModel.aggregate([
      { $match: { email } },
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B",
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          monthNumber: {
            $month: { $dateFromString: { dateString: "$date" } },
          },
        },
      },
      {
        $group: {
          _id: { monthString: "$monthString", monthNumber: "$monthNumber" },
        },
      },
    ]);

    const archived = await ArchivedExpenses.aggregate([
      { $match: { email } },
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B",
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          monthNumber: {
            $month: { $dateFromString: { dateString: "$date" } },
          },
        },
      },
      {
        $group: {
          _id: { monthString: "$monthString", monthNumber: "$monthNumber" },
        },
      },
    ]);

    const mergedMonths = [...transactions, ...archived]
      .map((item) => item._id)
      .sort((a, b) => a.monthNumber - b.monthNumber)
      .map((item) => item.monthString);

    const uniqueMonths = [...new Set(mergedMonths)];
    res.status(200).json(uniqueMonths);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotal = async (req, res) => {
  const { email } = req.query;
  try {
    const transactions = await TransactionModel.aggregate([
      { $match: { email } },
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B",
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          amount: { $toDouble: "$amount" },
        },
      },
      { $group: { _id: "$monthString", total: { $sum: "$amount" } } },
    ]);

    const archived = await ArchivedExpenses.aggregate([
      { $match: { email } },
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B",
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          amount: { $toDouble: "$amount" },
        },
      },
      { $group: { _id: "$monthString", total: { $sum: "$amount" } } },
    ]);

    const monthMapping = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    const mergedTotals = [...transactions, ...archived].reduce((acc, item) => {
      acc[item._id] = (acc[item._id] || 0) + item.total;
      return acc;
    }, {});

    const sortedTotals = Object.entries(mergedTotals)
      .map(([month, total]) => ({ _id: month, total }))
      .sort((a, b) => monthMapping[a._id] - monthMapping[b._id]);

    res.status(200).json(sortedTotals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
