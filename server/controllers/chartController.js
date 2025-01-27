import TransactionModel from "../models/TransactionModel.js";

export const getMonth = async (req, res) => {
  const { email } = req.query;
  try {
    const uniqueMonths = await TransactionModel.aggregate([
      { $match: { email } }, // Filter by email
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B", // Get the month name
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          monthNumber: {
            $month: { $dateFromString: { dateString: "$date" } }, // Get the month as a number
          },
        },
      },
      {
        $group: {
          _id: { monthString: "$monthString", monthNumber: "$monthNumber" },
        },
      },
      { $sort: { "_id.monthNumber": 1 } }, // Sort by month number (chronologically)
      { $project: { monthString: "$_id.monthString", _id: 0 } }, // Return only the month names
    ]);

    const months = uniqueMonths.map((item) => item.monthString); // Extract month strings
    res.status(200).json(months); // Return the sorted months
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotal = async (req, res) => {
  const { email } = req.query;
  try {
    const totals = await TransactionModel.aggregate([
      { $match: { email } }, // Filter by email
      {
        $project: {
          monthString: {
            $dateToString: {
              format: "%B", // Get the month name
              date: { $dateFromString: { dateString: "$date" } },
            },
          },
          amount: { $toDouble: "$amount" }, // Ensure the amount is numeric
        },
      },
      { $group: { _id: "$monthString", total: { $sum: "$amount" } } }, // Group by month and sum the amounts
      { $sort: { _id: 1 } }, // Sort alphabetically by month (this is not needed for proper chronological order)
    ]);

    // Prepare the result with months and totals sorted by month number
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

    // Sort totals by month using monthMapping
    const sortedTotals = totals.sort(
      (a, b) => monthMapping[a._id] - monthMapping[b._id]
    );

    res.status(200).json(sortedTotals); // Return sorted totals
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
