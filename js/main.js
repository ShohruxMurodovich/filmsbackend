const elInput = document.querySelector(".input")
const elList = document.querySelector(".list")
const elForm = document.querySelector(".form")


elForm.addEventListener("submit" , evt =>{
  evt.preventDefault()


function renderBackend(arr , element){
  const fragment = document.createDocumentFragment();

    arr.forEach(e => {
      const newItem = document.createElement("li")
      const newImg = document.createElement("img")
      const newTitle = document.createElement("h3");
      const newYear = document.createElement("strong");

      newImg.setAttribute("src" , e.Poster)
      newTitle.textContent = e.Title;
      newYear.textContent = e.Year;

      newItem.appendChild(newImg);

      newItem.appendChild(newTitle);
      newItem.appendChild(newYear);
      fragment.appendChild(newItem);
    })
    element.appendChild(fragment)
}



async function getFilms(){
  const inputVal = elInput.value

  const res = await fetch(`http://www.omdbapi.com/?apikey=d411bc9b&s=${inputVal.trim()}`);

  const data = await res.json();

  renderBackend(data.Search, elList);
  console.log(renderBackend())
}

getFilms()

})