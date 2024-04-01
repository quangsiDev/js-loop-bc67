var count1 = 0;
for (var i = 0; i < 3; i++) {
  count1++;
}

for (var i = 0; i < 3; i++) {
  count1++;
}
console.log("😀 - count1", count1); // count 1 =6

var count2 = 0;

for (var a = 0; a < 3; a++) {
  count2++;
  for (var b = 0; b < 3; b++) {
    count2++;
  }
}

console.log("😀 - count2", count2);

var count3 = 0;

for (var a = 0; a < 3; a++) {
  count3++;
  for (var b = 0; b < 3; b++) {
    count3++;
    for (var c = 0; c < 3; c++) {
      count3++;
    }
  }
}
console.log("😀 - count3", count3);
