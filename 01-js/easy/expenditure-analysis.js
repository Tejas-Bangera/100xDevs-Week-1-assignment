/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const resultObj = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = acc[transaction.category]
      ? acc[transaction.category] + transaction.price
      : transaction.price;

    return acc;
  }, {});

  return Object.keys(resultObj).map((category) => {
    return { [category]: resultObj[category] };
  });
}
const transactions = [
  {
    itemName: "Puma",
    category: "Shoe",
    price: 200,
    timeStamp: new Date(),
  },
  {
    itemName: "Nike",
    category: "Shoe",
    price: 300,
    timeStamp: new Date(),
  },
  {
    itemName: "Perfomax",
    category: "T-shirt",
    price: 100,
    timeStamp: new Date(),
  },
  {
    itemName: "Pan",
    category: "Kitchen",
    price: 250,
    timeStamp: new Date(),
  },
];

// console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
