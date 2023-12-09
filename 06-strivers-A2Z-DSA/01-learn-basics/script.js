// FIND THE FACTORIAL OF THE NUMBER
// 3! = 3*2*1*0
function findFact(number) {
  let fact = 1;
  let i = number;

  while (i > 0) {
    fact = fact * i;
    i--;
  }
  console.log(fact);
}
findFact(5); // 120

// CALCULATE THE TIME COMPLEXITY
// Problem 1
let n = 10;
for (let i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    console.log(i, j);
  }
}
// Explaination
// i = 0, [j=0,1,2,3,4,5,6,7,8,9];
// i = 1, [j=0,1,2,3,4,5,6,7,8,9];
// ...
// ...
// i = n-1, [j=0, ..... n-1]
// So, n+n+n+n......n times = n*n = n^2

// Problem 2
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}
// Explaination
// i=0, [j=0];
// i=1, [j=0,1];
// i=2, [j=0,1,2];
// ...
// ...
// i=n-1, [j=0,1,2,....n-1];

// PATTERN PROBLEMS ---------------------------------------------
// EXAMPLE 1
// Input: n=3
// Output:
// * * *
// * * *
// * * *
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
pattern1(3);


// EXAMPLE 2
// INPUT n=3
// OUTPUT
// *
// * *
// * * *
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
pattern2(3);
