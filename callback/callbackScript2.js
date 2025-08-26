console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

function calAge(year, callbackFun) {
  setTimeout(function () {
    var age = 2025 - year;
    callbackFun(age);
  }, 3000);
}

function canVote(age, cb) {
  setTimeout(function () {
    if (age > 18) {
      cb("Can vote");
    } else {
      cb("Cant vote");
    }
  }, 5000);
}

calAge(1988, function (age) {
  console.log("3sec: " + age);

  canVote(age, function (result) {
    console.log("5sec: " + result);
    // foo(result, function (res) {
    //   bar(res, function (val) {
    //   });
    // });
  });
});

// Callback Hell

// Promise

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");