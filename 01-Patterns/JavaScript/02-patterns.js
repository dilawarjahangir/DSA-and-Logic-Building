// *****
// *   *
// *   *
// *   *
// *****
const hollowBox = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === 0 || i === 4 || j === 0 || j === 4) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
};

// hollowBox();

// *   *
//  * *
//   *
//  * *
// *   *
const cross = () => {
  let dif = 4;
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
      if (i === j || j - i === dif) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
    dif = dif - 2;
  }
};

// cross();

//     *
//    **
//   ***
//  ****
const invertedAndRotatedPyramid = () => {
  space = 4;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (j > space) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    space--;
    console.log();
  }
};

// invertedAndRotatedPyramid()

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
const decreasingNumberCount = () => {
  let rows = 5;
  for (i = rows; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log();
  }
};

// decreasingNumberCount()

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const floydNumber = () => {
  count = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${count} `);
      count++;
    }
    console.log();
  }
};

// floydNumber()

const ZeroOneTriangle = () => {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        process.stdout.write(`1`);
      } else {
        process.stdout.write(`0`);
      }
    }
    console.log();
  }
};

ZeroOneTriangle();

const show = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      process.stdout.write(` r:${i}, c${j}`);
    }
    console.log();
  }
};

// show()
