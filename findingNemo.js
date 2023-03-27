const names = [
  "Just",
  "because",
  "a",
  "man",
  "is",
  "aggressive",
  "is",
  "not",
  "bad",
  "person",
];

const largeArray = new Array(10000).fill("bad");
function findingNemo(names, searchkeyword) {
  let t0 = performance.now();
  for (let i = 0; i < names.length; i++) {
    if (names[i] === searchkeyword) {
      console.log("Found the keyword");
    }
  }
  let t1 = performance.now();
  console.log("time taken to find ", t1 - t0);
}
findingNemo(largeArray, "bad");
