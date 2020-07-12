console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ul = document.getElementById("dog-breeds");
const selectBreeds = document.getElementById("breed-dropdown");


//challenge 1
  fetch(imgUrl).then(resp => resp.json()).then(json => addDogImg(json));

function addDogImg(json) {
  let imgDiv = document.getElementById("dog-image-container");
  json.message.forEach(dogUrl => {
    imgDiv.innerHTML += `
      <img src="${dogUrl}"><br>
    `
  });   
}

 //challenge 2

    fetch(breedUrl).then(resp => resp.json()).then(json => addBreeds(json.message));

    function addBreeds(breeds) {
      for(const breed in breeds){
         console.log(breed)
         let breedli = document.createElement("li")
         breedli.textContent = breed;
         ul.appendChild(breedli)

      }

        ul.addEventListener('click', changeColor)

    }

 // Challenge 3

function changeColor(event) {
  event.target.style.color = "pink";
}

//cahllenge 4

  selectBreeds.addEventListener('change', dog => {

    let filterBreeds = breeds.filter( breed => breed[0] === dog.target.value)
    ul.innerHTML = addBreeds(filterBreeds)

  })

})