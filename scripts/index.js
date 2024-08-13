import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

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


//VARIABLES

const profileEditBtn = document.querySelector(".lowheader__editbutton");
const profileEditModal = document.querySelector(".modal_type_edit-js");
const profileModalCloseBtn = profileEditModal.querySelector(".modal__close");

const profileTitle = document.querySelector(".lowheader__title");
const profileDescription = document.querySelector(".lowheader__span");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");

//let profileSaveBtn = document.querySelector('#profilesavebtn')
const cardAddModal = document.querySelector(".modal_type_add-js");
const cardAddBtn = document.querySelector("#add-button")
const cardAddCloseButton = cardAddModal.querySelector("#add-close-button")
const cardAddForm = cardAddModal.querySelector('#add-card-form')

//find previewImageModal here
const pictureModal = document.querySelector('.modal_type_picture-js')
const pictureModalCloseBtn = document.querySelector('#picture-close-button')
const pictureModalImage = document.querySelector(".modal__pictures") //It’s better to find constants only 1 time at the top of the file so as not to waste resources on searching them again and again when you call a method (function) because searching is a very hard operation for the browser engine
const pictureModalCaption = document.querySelector(".modal__pictures_alt")

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector(".card-template").content.firstElementChild; //grabs content as a fragment and to get the element you need to use its firstelementchild
const cardGallerySection = document.querySelector(".gallery");
//this variable is where the cards will be appended or rendered
const modals = document.querySelectorAll(".modal")

const cardSelector = document.querySelector('.card-template')


//VALIDATION

const validationSettings = {
  formSelector: ".modal__form", //might not be needed
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

//const editFormElement = profileEditModal.querySelector('#modal-type-edit')
//const addFormElement = cardAddModal.querySelector('#add-card-form')

const editFormValidator = new FormValidator(validationSettings, profileEditForm /*'#modal-type-edit'*/ )
const addFormValidator = new FormValidator(validationSettings, cardAddForm /*'#add-card-form'*/ )

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//FUNCTIONS

//function to close the modal
function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  /*profileEditModal*/
  document.removeEventListener('keydown', escapeModalHandler)
}

function openPopUp(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener('keydown', escapeModalHandler)
}

function renderCard(cardElement, container) {
  //const card = new Card(data, cardSelector)

  // container.prepend(card.getElementView(cardElement));
  container.prepend(cardElement);
}

//get a clone of card template and add the new source img and text it takes each obj iteration as cardData
function getCardView(cardData) {
  const card = new Card(cardData, '.card-template', handleImageClick)
  return card.getElementView()


  /*
    const cardElement = cardTemplate.cloneNode(true); //true brings all the child
    const cardImageEl = cardElement.querySelector(".card__image"); // to open picrure modal by clicking this element
    const cardTitleEl = cardElement.querySelector(".card__text");
    const cardLikeBtn = cardElement.querySelector(".card__heart")

    cardImageEl.setAttribute("alt", cardData.name);
    cardImageEl.setAttribute("src", cardData.link); //cardImageEl.src = cardData.link could work too!
    cardTitleEl.textContent = cardData.name; //set text name of image to the obj

    //addEventlistner for image modal
    cardImageEl.addEventListener('click', () => {
      pictureModalImage.setAttribute('src', cardData.link) //go ot the image element and change it to the image source that is  in line 69
      pictureModalImage.alt = cardData.name; //set the alt text to the name
      pictureModalCaption.textContent = cardData.name // switch the alternate text of the modal
      openPopUp(pictureModal) //open popup function with the (previewimagemodal)
    })

    //add event listner for like
    cardLikeBtn.addEventListener('click', () => {
      cardLikeBtn.classList.toggle('card__heart_active') // add active class to cardlikebutton
    })
*/

  //find trash icon
  //const trashIcon = cardElement.querySelector('.card__trashcan-btn')
  //add event listner for delete
  //trashIcon.addEventListener('click', () => {
  //  cardElement.remove(); //go to card element and call remove in it cardEl.remove()
  // })


  //return cardElement;

  //cardGallerySection.prepend(cardElement);
  // the two below could be used directly on the foreach loop
  //const cardElement = renderCardElement(cardData);
  //return cardElement;
}

//handler to set the text inside the edit
function handleAddEditButton() {
  //turn it into an arrow func prevent default and rearrange the value and text content and close the modal
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
  // event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  //grab values of the input form then set them whats will be inputted
  const name = e.target.title.value // title is the name attribute
  const link = e.target.link.value

  // TODO Use new card class here
  //const card = new Card(cardData, '.card-template', handleImageClick)

  const newCard = getCardView({
    name,
    link //since this is an object that's destructured  the order doesnt matter , if its an array the order matters
  }); // im passing the data from here to the getCardView
  /* const cardElement = getCardView({
     name,
     link
   })
     */
  //call render card function and pass an object with name and link

  //card.getElementView()
  //const cardView = getCardView({
  //  name, // name:name, since both vars and properties are called the same you can just put em once
  //  link //link:link     you are setting the new variables with the attribute value assigned
  // })
  /*renderCard({name:title,link:link})*/
  //card section
  renderCard(newCard, cardGallerySection) // this invokes the rendering function with new variable and which will be appended into the gallery
  closePopUp(cardAddModal) //close after the process
  e.target.reset(); //reset the card after inputting
  //newPlaceBtn.disabled = true;
  addFormValidator.disabledButton();
  // search for button, disable it, add a class would've worked as well
}

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault(); // now i can add multple lines of code regarding the event handler by the use of arrow function.
  handleProfileEditSubmit() // i could put e to pass it to the above function but i wouldn't need to now
});
profileEditBtn.addEventListener("click", handleAddEditButton); /*()=>{the body of toggle edit button could go here} */
profileModalCloseBtn.addEventListener("click", () => {
  closePopUp(profileEditModal); /* you could delete the arrow function and just use the name of closePopup as reference*/
});


cardAddForm.addEventListener('submit', handleCardAddSubmit)
cardAddBtn.addEventListener('click', handleAddButton);
cardAddCloseButton.addEventListener('click', () => {
  closePopUp(cardAddModal)
})
pictureModalCloseBtn.addEventListener('click', () => {
  closePopUp(pictureModal)
}) //Close icons should be handled only once in the file body, otherwise you add listeners again and again to the same elements. This can cause a memory leak


//close modal if clicked outside forms

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      closePopUp(e.target)
      // closePopUp(profileEditModal) or any other modal
    }
  })
})
//if you click escape close the modals
function escapeModalHandler(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector('.modal_opened')
    closePopUp(openedPopup)
  }
}

/*
document.querySelector('body').addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closePopUp(profileEditModal)
    closePopUp(pictureModal)
    closePopUp(cardAddModal)

  }
})
*/

// TODO define handle image click function
function handleImageClick(name, link) {
  pictureModalImage.setAttribute('src', link) //go ot the image element and change it to the image source that is  in line 69
  pictureModalImage.alt = name; //set the alt text to the name
  pictureModalCaption.textContent = /*cardData.*/ name // switch the alternate text of the modal
  openPopUp(pictureModal)
}

//places each card into the list in the DOM
initialCards.forEach((cardData) => {
  // const cardElement = renderCard(cardData); //get each obj and store it into a variable that will be rendered
  //cardGallerySection.append(cardElement);//apends to the end of the gallery also was used in rendering function
  //const cardView = getCardView(cardData) //get the cardview for each particular object element and store it into a variable
  //i need to use the card element from the card class that and the selector of the template
  // TODO pass a third argument, a function to handle image click
  //const card = new Card(cardData, '.card-template', handleImageClick)
  const cardView = /*card.*/ getCardView(cardData);
  //TODO call cardview function for avoid repeating yourself.
  renderCard(cardView, cardGallerySection) //needs to pass card which is the object iterations and the element in which it will be appended in the gallery
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

/*
You can make a universal handler
for any close buttons:

  It will look something like that:

// find all close buttons
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // find the closest popup
  const popup = button.closest('.popup');
  // set the listener
  button.addEventListener('click', () => closePopup(popup));
});

*/

//ctrl d selects all versions of it and ctrl click to find the source function