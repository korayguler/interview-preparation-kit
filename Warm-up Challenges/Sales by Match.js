function sockMerchant(n, ar) {
  ar = ar.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      count++;
      i++;
    }
  }

  return count;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
