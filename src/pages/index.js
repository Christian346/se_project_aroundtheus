import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import Card from "../components/Card.js";
//import {closePopUp,openPopUp,escapeModalHandler} from"../utils/utils.js"
import Section from "../components/Section.js";
//import PopupWithForm from "../scripts/PopupWithForm.js"
import  UserInfo  from "../components/UserInfo.js";
import {
  initialCards,
  profileEditBtn,
  profileEditModal,
  profileModalCloseBtn,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  cardAddModal,
  cardAddBtn,
  cardAddCloseButton,
  cardAddForm,
  pictureModal,
  pictureModalCloseBtn,
  pictureModalImage,
  pictureModalCaption,
  profileEditForm,
  cardTemplate,
  cardGallerySection,
  modals,
  cardSelector,
  validationSettings
} from "../utils/constants.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";



//const editFormElement = profileEditModal.querySelector('#modal-type-edit')
//const addFormElement = cardAddModal.querySelector('#add-card-form')

const editFormValidator = new FormValidator(validationSettings, profileEditForm /*'#modal-type-edit'*/ )
const addFormValidator = new FormValidator(validationSettings, cardAddForm /*'#add-card-form'*/ )

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//============ClASSES INSTANTIATIONS
/*const imageModal = new popUpWithImage()
 imageModal.setEventListeners()
*/
/*
Create an instance of the UserInfo class in index.js and use its methods as described.
*/
//const editProfilePopup = new PopupWithForm('.modal_type_edit-js', ()=>{});
// call setEventListeners
//editProfilePopup.setEventListeners();

//const popups = new Popup()
//popups.setEventListeners()


const cardList = new Section({
    items: initialCards,
    renderer: (individualCard) => {
      renderCard(individualCard);
    },
  },
  cardGallerySection
);
cardList.renderMethod();
//
const editProfileForm = new PopupWithForm({
  modalSelector: '.modal_type_edit-js',
  handleFormSubmit: handleProfileEditSubmit
})
editProfileForm.setEventListeners();
//

//make a addCardForm
const addCardForm = new PopupWithForm({
   modalSelector: '.modal_type_add-js',
    handleFormSubmit: handleCardAddSubmit
})
addCardForm.setEventListeners();

const imagePopup = new PopupWithImage({
modalSelector: '.modal_type_picture-js'
});
imagePopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.lowheader__title',
  descriptionSelector: '.lowheader__span'
})


function renderCard(individualCard) {
    const cardView = getCardView(individualCard);
  //const card = new Card(data, cardSelector)
  // container.prepend(card.getElementView(cardElement));
  cardList.addItem(cardView)
}




//get a clone of card template and add the new source img and text it takes each obj iteration as cardData
function getCardView(cardData) {
  const card = new Card(cardData, '.card-template', handleImageClick)
  return card.getElementView()

}

//handler to set the text inside the edit  take out the add part of the function
function handleEditButton() {
    const userData = userInfo.getUserInfo()

  //turn it into an arrow func prevent default and rearrange the value and text content and close the modal
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userDescription//profileDescription.textContent;

  // profileEditModal.classList.add("modal_opened");
  editProfileForm.open()
 // openPopUp(profileEditModal);
  // use .open() method of popup with form

}

//handler to set the text inside the edit
function handleAddButton() {
  //profileTitleInput.value = profileTitle.textContent;
  // profileDescriptionInput.value = profileDescription.textContent;
  // above are not needed for that modal
 // openPopUp(cardAddModal);
  addCardForm.open();
}

//handler function to update text inside edit profile
function handleProfileEditSubmit(profileData) {
  // event.preventDefault();
 //setUser info goes here
  // set the instance method from UserInfo setuserinfo() for the code below
  //profileTitle.textContent = profileData.name;
  //profileDescription.textContent = profileData.description;
  userInfo.setUserInfo(profileData)
  editProfileForm.close();
  //closePopUp(profileEditModal);
}

function handleCardAddSubmit(/*e*/ newCardData) {
  //e.preventDefault();
  //grab values of the input form then set them whats will be inputted
  const name = newCardData.title//e.target.title.value // title is the name attribute
  const link = newCardData.link//e.target.link.value

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
  cardList.addItem(newCard)
  //renderCard(newCard) // this invokes the rendering function with new variable and which will be appended into the gallery
  addCardForm.close()
  //closePopUp(cardAddModal) //close after the process

  //e.target.reset(); //reset the card after inputting
  //newPlaceBtn.disabled = true;
  addFormValidator.disabledButton();
  // search for button, disable it, add a class would've worked as well
}

/*
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault(); // now i can add multple lines of code regarding the event handler by the use of arrow function.
  handleProfileEditSubmit() // i could put e to pass it to the above function but i wouldn't need to now
});
*/
profileEditBtn.addEventListener("click", handleEditButton);

 /*()=>{the body of toggle edit button could go here} */
/*profileModalCloseBtn.addEventListener("click", () => {
  closePopUp(profileEditModal); /* you could delete the arrow function and just use the name of closePopup as reference*/
//});


//cardAddForm.addEventListener('submit', handleCardAddSubmit)

cardAddBtn.addEventListener('click', handleAddButton);
/*
cardAddCloseButton.addEventListener('click', () => {
  //closePopUp(cardAddModal)
})
*/

//pictureModalCloseBtn.addEventListener('click', () => {
 // imagePopup.close()
  //closePopUp(pictureModal)
//}) //Close icons should be handled only once in the file body, otherwise you add listeners again and again to the same elements. This can cause a memory leak


//close modal if clicked outside forms
/*
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      closePopUp(e.target)
      // closePopUp(profileEditModal) or any other modal
    }
  })
})
  */
//if you click escape close the modals
/*
function escapeModalHandler(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector('.modal_opened')
    closePopUp(openedPopup)
  }
}
*/

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
  //pictureModalImage.setAttribute('src', link) //go ot the image element and change it to the image source that is  in line 69
  //pictureModalImage.alt = name; //set the alt text to the name
  //pictureModalCaption.textContent = /*cardData.*/ name // switch the alternate text of the modal
  imagePopup.open({name,link})
 // openPopUp(pictureModal)

}

//places each card into the list in the DOM

//initialCards.forEach((cardData) => {
  // const cardElement = renderCard(cardData); //get each obj and store it into a variable that will be rendered
  //cardGallerySection.append(cardElement);//apends to the end of the gallery also was used in rendering function
  //const cardView = getCardView(cardData) //get the cardview for each particular object element and store it into a variable
  //i need to use the card element from the card class that and the selector of the template
  // TODO pass a third argument, a function to handle image click
  //const card = new Card(cardData, '.card-template', handleImageClick)
 // const cardView = /*card.*/ getCardView(cardData);
  //TODO call cardview function for avoid repeating yourself.
 // renderCard(cardView, cardGallerySection) //needs to pass card which is the object iterations and the element in which it will be appended in the gallery
//});

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