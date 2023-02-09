const character = {
  id: 1,
  name: "スライム",
  hp: 50,
};

const addMP = (a) => {
  character.mp = a;
  return character;
};

const updateHP = () => {
  character.hp = 35;
  delete character.mp;
  return character;
};

const LookUpName = () => {
  return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
