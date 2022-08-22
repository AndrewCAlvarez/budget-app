// TODO: Delete
export interface FinancialEvent {
  url: 'http://localhost:8080/users/1/events';
  id: number;
  amount: number;
  type: string;
  description: string;
}
export const financialEvents = [
  {
    id: 0,
    amount: 10.5,
    type: 'Entertainment',
    description: 'LOTR dvds.',
  },
  {
    id: 1,
    amount: 8.0,
    type: 'Food',
    description: 'Lettuce wrap burger.',
  },
  {
    id: 2,
    amount: 850,
    type: 'Housing',
    description: 'Rent',
  },
];
