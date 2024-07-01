const initialCards = [{
    name: "El Pico Duarte",
    link: "https://unsplash.com/photos/forest-covered-with-fogs-W7oPDwcqccQ",
  },
  {
    name: "Mount Rushmore",
    link: "https://unsplash.com/photos/a-group-of-presidents-carved-into-the-side-of-a-mountain-JqR0rtygBfM",
  },
  {
    name: "Yellowstone Park",
    link: "https://unsplash.com/photos/green-trees-under-blue-sky-and-white-clouds-during-daytime-eprFKRjtoE0",
  },
  {
    name: "The Everglades",
    link: "https://unsplash.com/photos/leafless-trees-between-river-rTkEjSss93U",
  },
  {
    name: "Death Valley",
    link: "https://unsplash.com/photos/brown-concrete-road-during-daytime-2TQwrtZnl08",
  },
  {
    name: "Bahia de las Aguilas",
    link: "https://unsplash.com/photos/brown-rock-formation-beside-blue-sea-under-blue-sky-and-white-clouds-during-daytime-EEwfeFr6J44",
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
  const cardElement = GetCardElement(cardData)
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