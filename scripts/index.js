const initialCards = [
  {
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
const profileEditModal = document.querySelector(".js-modal_type_edit");
const profileModalCloseBtn = profileEditModal.querySelector(".modal__close");

const profileTitle = document.querySelector(".lowheader__title");
const profileDescription = document.querySelector(".lowheader__span");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

//let profileSaveBtn = document.querySelector('#profilesavebtn')
const cardAddModal = document.querySelector(".js-modal_type_add");
const cardAddBtn = document.querySelector("#add-button")
const cardAddCloseButton = cardAddModal.querySelector("#add-close-button")
const cardAddForm = cardAddModal.querySelector('#add-card-form')


const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector(".card-template").content.firstElementChild; //grabs content as a fragment and to get the element you need to use its firstelementchild
const cardListEl = document.querySelector(".gallery");

//function to close the modal
function closePopUp(modal) {
  /*profileEditModal*/modal.classList.remove("modal_opened");
}
function openPopUp(modal){
modal.classList.add("modal_opened");
}
function renderCard(cardElement , container){
  container.prepend(cardElement);
}

//work to be done here!!!
//get a clone of card template and add the new source img and text
function getCardView(cardData) {
  const cardElement = cardTemplate.cloneNode(true);//true brings all the child

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__text");

  cardImageEl.setAttribute("alt", cardData.name);
  cardImageEl.setAttribute("src", cardData.link); //cardImageEl.src = cardData.link could work too!
  cardTitleEl.textContent = cardData.name; //set text name of image to the obj

   const cardLikeBtn = cardElement.querySelector(".card__heart")
   //add event listner for like
   cardLikeBtn.addEventListener('click',()=>{
  // add active class to cardlikebutton
    cardLikeBtn.classList.toggle('card__heart_active')
   })
   //find trash icon
   const trashIcon = cardElement.querySelector('.card__trashcan-btn')
   //add event listner for delete
   trashIcon.addEventListener('click',()=>{
     cardElement.remove();
   })
   //go to card element and call remove in it cardEl.remove()


   //addevent listner for the image click to make image modal

    //open image popup //create a third pop up in html
    //find image element inside popup and replace the src with cardData.link
    // replace alt with card title

  return cardElement;
   //cardListEl.prepend(cardElement);
   // the two below could be used directly on the foreach loop
  //const cardElement = renderCardElement(cardData);
  //return cardElement;
}

//handler to set the text inside the edit
function handleAddEditButton() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
 // profileEditModal.classList.add("modal_opened");
 openPopUp(profileEditModal);
}

//handler to set the text inside the edit
function handleAddButton() {
  //profileTitleInput.value = profileTitle.textContent;
 // profileDescriptionInput.value = profileDescription.textContent;
  // above are not needed for that modal
  openPopUp(cardAddModal);
}

//handler function to update text inside edit profile
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}
function handleCardAddSubmit(e){
e.preventDefault();
//grab values of the input form then set them whats will be inputted
const name = e.target.title.value // title is the name attribute
const link = e.target.link.value

//call render card function and pass an object with name and link
const cardView = getCardView({
  name,
  link
})
/*
renderCard({
    name:title,
    link:link
  })
*/
  renderCard(cardView ,cardListEl)
  closePopUp(cardAddModal)
}


profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditBtn.addEventListener("click",handleAddEditButton); /*()=>{the body of toggle edit button could go here} */
profileModalCloseBtn.addEventListener("click", () => {closePopUp(profileEditModal); /* you could delete the arrow function and just use the name of closePopup as reference*/});
cardAddBtn.addEventListener('click', handleAddButton );
cardAddCloseButton.addEventListener('click',()=>{closePopUp(cardAddModal)})
cardAddForm.addEventListener('submit', handleCardAddSubmit)

//places each card into the list in the DOM
initialCards.forEach((cardData) => {
 // const cardElement = renderCardElement(cardData);
  //cardListEl.append(cardElement);//apends to the end of cardlist

const cardView = getCardView(cardData)
  renderCard(cardView , cardListEl)//needs to pass card data variable which is the object iterations
});

/*
const cardLikeBtn = document.querySelectorAll(".card__heart")
cardLikeBtn.forEach((heart)=>{
  heart.addEventListener("click", ()=>{
    heart.classList.toggle('card__heart_active')
  })
})
*/

/* //loop way
for (let i = 0; i < initialCards.length; i++) {
  let card = initialCards[i];
}
*/
/*
initialCards.forEach((cardData) => {
//clone template
//find .card__image
//find .card__title
//replace img src
//replace img alt
//replace title
//append to gallery
});
*/

//on trashcan user .remove() in the element in order to remove it
// the like button needs an addeventlistener click



