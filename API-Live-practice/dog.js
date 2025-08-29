async function searchDog() {
  try {
    var holder = document.getElementById("dog-holder").innerHTML = ""
    var searchTerm = document.getElementById("search").value;
    var dogData = await fetch("https://dog.ceo/api/breed/" + searchTerm + "/images");
    var dogs = await dogData.json();
    for (let index = 0; index < dogs.message.length; index++) {
        // var div = document.createElement("div");
        var img = document.createElement("img")
        img.setAttribute("src",dogs.message[index])
        // div.appendChild(img)
        var holder = document.getElementById("dog-holder")
        holder.appendChild(img)
    }
  } catch (error) {
    console.log(error)
  }
}