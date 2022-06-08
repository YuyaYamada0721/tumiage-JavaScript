// filter map find 学習

// ランダムな0から100までの数値が10個入った配列を作成
// その配列から偶数の値だけを抽出した配列を返す。
// その結果を２倍した配列を返す。
// その配列の中で50以上の最初の数値を返す。

let checkNumber = [];
let checkNumberCount = 10;

for (let i = 0; i < checkNumberCount; i++) {
  checkNumber.push(Math.floor(Math.random() * 101));
}

function evenValueCheck(values) {
  return values.filter(value => value % 2 == 0);
};

console.log(evenValueCheck(checkNumber));

function twoTimesValues(values) {
  return values.map(value => value * 2);
};

console.log(twoTimesValues(evenValueCheck(checkNumber)));

function overFiftyCheck(values) {
  return values.find(value => value >= 50);
};

console.log(overFiftyCheck(twoTimesValues(evenValueCheck(checkNumber))));
