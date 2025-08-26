function calculateAge(year) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var currentYear = new Date().getFullYear();
      if (year > currentYear) {
        reject("Cant calculate age");
      } else {
        resolve(currentYear - year);
      }
    }, 3000);
  });
}

console.log("-----");

var userAge = calculateAge(2026);

userAge
  .then(function (age) {
    console.log(age);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("######");