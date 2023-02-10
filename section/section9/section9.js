const userIdList = (a) => {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    array.push(a[i].userId);
  }
  const newArray = [];
  array.forEach((currentValue) => {
    if (!newArray.includes(currentValue)) {
      newArray.push(currentValue);
    }
  });
  return newArray;
};

const fixData = (a) => {
  const array1 = [];
  for (let i = 0; i < a.length; i++) {
    array1.push(a[i].userId);
  }
  const array2 = [];
  array1.forEach((currentValue) => {
    if (!array2.includes(currentValue)) {
      array2.push(currentValue);
    }
  });
  //ここまででarray2=[1,30000,123456]みたいな感じ
  const array3 = [];
  for (let i = 0; i < array2.length; i++) {
    array3.push({ userId: array2[i], datas: [] });
    for (let l = 0; l < a.length; l++) {
      if (array2[i] === a[l].userId) {
        array3[i].datas.push(a[l]);
      }
    }
  }
  //array3={ userId: array2[i], datas: a[l] })になる。datasに余計なuserIdが残るから、それを消す
  for (let i = 0; i < array3.length; i++) {
    for (let l = 0; l < array3[i].datas.length; l++) {
      delete array3[i].datas[l].userId;
    }
  }
  return array3;
};

module.exports = { userIdList, fixData };
