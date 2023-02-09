const sum = (a, b) => {
  let i,
    ans = 0;
  if (a <= b) {
    for (i = 0; a + i <= b; i++) {
      ans += a + i;
    }
    return ans;
  } else {
    for (i = 0; b + i <= a; i++) {
      ans += b + i;
    }
    return ans;
  }
};

module.exports = { sum };
