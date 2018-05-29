const getTotalExpenses = (expenses) => {
  let totalExpenses = 0;
  expenses.map(({ amount }) => {
    totalExpenses += amount;
  });
  return totalExpenses;
};

export default getTotalExpenses;
