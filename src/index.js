let addToy = false;
toyUrl = "http://localhost:3000/toys"

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetchToys()

  

  document.querySelector(".add-toy-form").addEventListener("submit", submitToy)

});


function fetchToys() {
  fetch(toyUrl) 
  .then(res => res.json())
  .then(data => data.forEach(renderToys))
}

function renderToys(toy){

  card = document.createElement('DIV')

  toyName = document.createElement('H2')
  toyName.innerText=  toy.name
  
  toyImg = document.createElement('IMG')
  toyImg.src = `${toy.image}`
  toyImg.className = "toy-avatar"

  toyLikes = document.createElement('p')
  toyLikes = `Likes: ${toy.likes}`

  likeBtn = document.createElement('BUTTON')
  likeBtn.classList.add("like-btn")
  likeBtn.id = toy.id
  likeBtn.innerText = "Like"
  likeBtn.addEventListener('click', likeToy)

  card.append(toyImg, toyName, toyLikes, likeBtn)
  document.querySelector("#toy-collection").appendChild(card)
  //  debugger
  
}

function likeToy() {
  findToyLikes + 1
}

function submitToy(e) {
  e.preventDefault()
  console.log(e.target)
    console.log(e)
  let newToy = {
  //   // for (let key in e.target) {
  //   //   console.log(key)
  //   }
    

    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0 
  }

  let reqObj = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(newToy)
    
  }
  console.log(reqObj)
}