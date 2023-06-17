const cashback = {
  regular: {
    bound: 1000,
    persent: 1,
  },
  silver: {
    bound: 10000,
    persent: 2,
  },
  gold: {
    bound: 100000,
    persent: 5,
  },
};

export default function calculateCashback(amount) {
  if (amount >= cashback.gold.bound) {
    return Math.ceil(amount * cashback.gold.persent / 100);
  }
  if (amount >= cashback.silver.bound) {
    return Math.ceil(amount * cashback.silver.persent / 100);
  }
  if (amount >= cashback.regular.bound) {
    return Math.ceil(amount * cashback.regular.persent / 100);
  }
  return 0;
}
