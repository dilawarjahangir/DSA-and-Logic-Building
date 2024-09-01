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

// ZeroOneTriangle();

// col   01234567
//row 0 *      *
//row 1 **    **
//row 2 ***  ***
//row 3 ********
//row 4 ********
//row 5 ***  ***
//row 6 **    **
//row 7 *      *
const butterFly = () => {
  let row = 8;
  let col = 8;
  let half = row / 2;
  let right = 1;
  let left = col - 2;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j < right || j > left) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");

    if (i < half - 1) {
      right++;
      left--;
    } else if (i >= half) {
      right--;
      left++;
    }
  }
};

//   butterFly();

// *****
//  *****
// *****
//  *****
// *****

const rombus = () => {
  size = 5;
  print = 5;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size * 2 - 1; j++) {
      if (j >= print && j < print + 5) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    print--;
    console.log();
  }
};

// rombus()

//     *****
//    *   *
//   *   *
//  *   *
// *****
const hollowRombus = () => {
  size = 5;
  print = 5;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size * 2 - 1; j++) {
      if (j >= print && j < print + 5) {
        if (i === 1 || i == 5 || j == print || j === print + 4) {
          process.stdout.write("*");
        } else {
          process.stdout.write(" ");
        }
      } else {
        process.stdout.write(" ");
      }
    }
    print--;
    console.log();
  }
};

// hollowRombus()

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
const diamond = () => {
  size = 8;
  left = 8 / 2;
  right = 8 / 2;
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      if (j >= left && j <= right) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    if (i >= 4) {
      left++;
      right--;
    } else {
      left--;
      right++;
    }

    console.log();
  }
};

diamond();

const show = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      process.stdout.write(` r:${i}, c${j}`);
    }
    console.log();
  }
};

// show()
