import { strictEquals } from './tools.js';

const arr = [
  [1, 1],
  [NaN, NaN],
  [0, -0],
  [-0, 0],
  [1, '1'],
  [true, false],
  [false, false],
  ['Water', 'oil'],
];

arr.forEach((element) => {
  console.log(
    `${element[0]}, ${element[0]} : ${strictEquals(element[0], element[1])}`
  );
});
