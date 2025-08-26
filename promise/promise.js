// What is Promise?
// It's a another method to convert non-blocking code to blocking code.

function assistant() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("This is the information");
    }, 3000);
  });
}

console.log("Chapter 1");
console.log("Chapter 2");

// Writter calling assistant
var writer = assistant();
console.log(writer);
writer
  .then(function (data) {
    console.log("Chapter 3", data);
    console.log(writer);
  })
  .catch(function (error) {
    console.log(error);
    console.log(writer);
  });

console.log("Chapter 4");
console.log("Chapter 5");

// car (Blue Print)
// start, stop
// color, band

// var car1 = new car
// var car2 = new car