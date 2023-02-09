const firstIndex = (a) => {
  return a[0];
};
const countArrayLength = (a) => {
  if (Array.isArray(a) === true) {
    if (a.length === 0) {
      return "この配列は空配列です";
    } else {
      return `この配列は${a.length}個のデータを持っています`;
    }
  } else {
    return "これは配列ではありません";
  }
};

const extractArray = (a) => {
  if (a.length >= 3) {
    return [a[1], a[2]];
  } else if (a.length === 2) {
    return [a[1]];
  } else {
    return [];
  }
};

const makeMark = (a, b) => {
  const array = [];
  for (let i = 0; i < b; i++) {
    array.push(a);
  }
  return array;
};

const onlyString = (a) => {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "string") {
      array.push(a[i]);
    }
  }
  return array;
};

const addNumber = (a) => {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    array.push(`${i + 1}: ${a[i]}`);
  }
  return array;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
