const initialCards = [{
    name: "El Pico Duarte",
    link: "https://images.unsplash.com/photo-1538430352266-de6bcba9a06b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Mount Rushmore",
    link: "https://plus.unsplash.com/premium_photo-1661855590183-87806182951b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yellowstone Park",
    link: "https://images.unsplash.com/photo-1594073632422-ef9768f87fa4?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "The Everglades",
    link: "https://images.unsplash.com/photo-1569007244429-d61733753006?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Death Valley",
    link: "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bahia de las Aguilas",
    link: "https://images.unsplash.com/photo-1595788429812-6e185229a294?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const profileEditBtn = document.querySelector(".lowheader__editbutton");
const profileEditModal = document.querySelector(".modal");
const profileModalCloseBtn = document.querySelector(".modal__close")

const profileTitle = document.querySelector('.lowheader__title')
const profileDescription = document.querySelector('.lowheader__span')
const profileTitleInput = document.querySelector('#profile-title-input')
const profileDescriptionInput = document.querySelector('#profile-description-input')

//let profileSaveBtn = document.querySelector('#profilesavebtn')
const profileEditForm = profileEditModal.querySelector('.modal__form')

const cardTemplate = document.querySelector(".card-template").content.firstElementChild;

const cardListEl = document.querySelector(".gallery")


//functions
function closePopUp() {
  profileEditModal.classList.remove('modal_opened')
}

function handleAddEditButton() {
  profileTitleInput.value = profileTitle.textContent
  profileDescriptionInput.value = profileDescription.textContent
  profileEditModal.classList.add("modal_opened")
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true)

  const cardImageEl = cardElement.querySelector('.card__image')
  const cardTitleEl = cardElement.querySelector('.card__text')

  cardImageEl.setAttribute("alt", cardData.name)//
  cardImageEl.setAttribute("src", cardData.link)// I'm not sure if this is correct my images are not showing
  cardTitleEl.textContent = cardData.name;

  return cardElement
}


//handler function

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value
  profileDescription.textContent = profileDescriptionInput.value
  closePopUp();
}

profileEditForm.addEventListener('submit', handleProfileEditSubmit)

profileEditBtn.addEventListener("click", handleAddEditButton) /*()=>{the body of toggle edit button could go here} */

profileModalCloseBtn.addEventListener("click", () => {
  closePopUp(); // you could delete the arrow function and just use the name of closePopup as reference
})

//loops
/*
for (let i = 0; i < initialCards.length; i++) {
  let card = initialCards[i];
}
*/

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData)
  cardListEl.append(cardElement);

})


//-----------
/*
< article class = "card" >
  <
  img
src = "./images/yosemite-valley.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > yosemite - valley < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article> <
  article class = "card" >
  <
  img
src = "./images/lake-louise.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > Lake Louise < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article> <
  article class = "card" >
  <
  img
src = "./images/bald-mountains.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > Bald Mountains < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article> <
  article class = "card" >
  <
  img
src = "./images/latemar.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > Latemar < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article> <
  article class = "card" >
  <
  img
src = "./images/vanoise-national-park.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > Vanoise National Park < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article> <
  article class = "card" >
  <
  img
src = "./images/lago-di-braies.jpg"
alt = "landscape picture"
class = "card__image" /
  >
  <
  div class = "card__inner" >
  <
  h2 class = "card__text" > Lago di Braies < /h2> <
  button
class = "card__heart"
type = "button"
aria - label = "button to like" >
  < /button> <
  /div> <
  /article>
*/