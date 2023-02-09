const echoDiv = (a, b) => {
  return `商: ${Math.floor(a / b)}, 余り: ${a % b}`;
};

const reply = (a = "返信なし") => {
  return a;
};

module.exports = { echoDiv, reply };
