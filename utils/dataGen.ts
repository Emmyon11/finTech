import { MaterialIcons } from '@expo/vector-icons';

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate sample data for income and expenses
function generateData(numItems: number) {
  let data = [];
  const items = [
    'Salary',
    'Freelance Work',
    'Rental Property',
    'Side Business',
    'Investments',
    'Grocery',
    'Utilities',
    'Rent',
    'Transportation',
    'Entertainment',
    'Dining Out',
    'Health Insurance',
    'Savings',
    'Miscellaneous',
  ];

  for (let i = 0; i < numItems; i++) {
    let income = getRandomNumber(0, 5000);
    let expenses = getRandomNumber(0, 1000);
    // Ensure expenses don't exceed income
    if (expenses > income) {
      expenses = income - getRandomNumber(0, 500);
    }

    data.push({
      item: items[i],
      income: income,
      expenses: expenses,
    });
  }

  return data;
}
type DataItemType = {
  id: string;
  title: string;
  amount: number;
  color: string;
  materialIconName: keyof typeof MaterialIcons.glyphMap;
};
export const dataItem: DataItemType[] = [
  {
    id: '1',
    title: 'Item 1',
    amount: 10,
    color: 'blue',
    materialIconName: 'add',
  },
  {
    id: '2',
    title: 'Item 2',
    amount: 20,
    color: 'green',
    materialIconName: 'remove',
  },
  {
    id: '3',
    title: 'Item 3',
    amount: 30,
    color: 'red',
    materialIconName: 'done',
  },
  {
    id: '4',
    title: 'Item 4',
    amount: 40,
    color: 'orange',
    materialIconName: 'delete',
  },
  {
    id: '5',
    title: 'Item 5',
    amount: 50,
    color: 'purple',
    materialIconName: 'edit',
  },
  // Add more items
  {
    id: '6',
    title: 'Item 6',
    amount: 60,
    color: 'cyan',
    materialIconName: 'check',
  },
  {
    id: '7',
    title: 'Item 7',
    amount: 70,
    color: 'magenta',
    materialIconName: 'clear',
  },
  {
    id: '8',
    title: 'Item 8',
    amount: 80,
    color: 'yellow',
    materialIconName: 'menu',
  },
  {
    id: '9',
    title: 'Item 9',
    amount: 90,
    color: 'teal',
    materialIconName: 'search',
  },
  {
    id: '10',
    title: 'Item 10',
    amount: 100,
    color: 'pink',
    materialIconName: 'refresh',
  },
  // Add more items as needed
];

export const accountData = [
  {
    id: 1,
    accountType: 'Checking',
    accountBalance: 2500.0,
  },
  {
    id: 2,
    accountType: 'Savings',
    accountBalance: 10000.0,
  },
  {
    id: 3,
    accountType: 'Investment',
    accountBalance: 50000.0,
  },
  {
    id: 4,
    accountType: 'Credit Card',
    accountBalance: -500.0,
  },
  {
    id: 5,
    accountType: 'Retirement',
    accountBalance: 100000.0,
  },
];
