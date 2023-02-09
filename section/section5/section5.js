const score = (a) => {
  if (a === undefined) {
    return "後日受験";
  } else if (a < 0 || a > 100 || typeof a === "string") {
    return "0以上100未満の数字を入れてください";
  } else if (0 <= a && a <= 59) {
    return "不合格";
  } else if (60 <= a && a <= 79) {
    return "追試";
  } else {
    return "合格";
  }
};
module.exports = { score };
