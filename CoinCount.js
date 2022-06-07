// 指定された金額から、100円 10円 1円 の3種類を使用し、最小コイン枚数を求める関数。

function minCoinCount(price) {
  let coinCount = 0;

  while (100 <= price) {
    price -= 100;
    coinCount++;
  }

  while (10 <= price) {
    price -= 10;
    coinCount++;
  }

  while (1 <= price) {
    price -= 1;
    coinCount++;
  }

  return coinCount;
};

console.log(minCoinCount(1015));
