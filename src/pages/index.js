import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import Card from "../components/Card.js";
//import {closePopUp,openPopUp,escapeModalHandler} from"../utils/utils.js"
import Section from "../components/Section.js";
//import PopupWithForm from "../scripts/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js";
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
  validationSettings,
  deleteCardModal,
  deleteModalBtn,
  changeAvatarIcon,
  changeAvatarPictureForm
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";
import {
  api
} from "../components/Api.js";

//==============ENABLE VALIDATIONS
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm /*'#modal-type-edit'*/
);
const addFormValidator = new FormValidator(
  validationSettings,
  cardAddForm /*'#add-card-form'*/
);

const changeAvatarPictureValidator = new FormValidator(
  validationSettings,
  changeAvatarPictureForm
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
changeAvatarPictureValidator.enableValidation();
//============ClASSES INSTANTIATIONS

//render the cards
const cardList = new Section({
    items: initialCards,
    renderer: (individualCard) => {
      renderCard(individualCard);
    },
  },
  cardGallerySection
);
cardList.renderMethod();

//edit profile fomr popup
const editProfileForm = new PopupWithForm({
  modalSelector: ".modal_type_edit-js",
  handleFormSubmit: handleProfileEditSubmit,
});
editProfileForm.setEventListeners();

//make a addCardForm
const addCardForm = new PopupWithForm({
  modalSelector: ".modal_type_add-js",
  handleFormSubmit: handleCardAddSubmit,
});
addCardForm.setEventListeners();
// variable to make images modal show when clicked
const imagePopup = new PopupWithImage({
  modalSelector: ".modal_type_picture-js",
});
imagePopup.setEventListeners();
//set the username for edit profile with this class
const userInfo = new UserInfo({
  nameSelector: ".lowheader__title",
  descriptionSelector: ".lowheader__span",
});



//new popup for prompting if will delete a card
const areYouDeletingCardPopup = new PopupWithFormSubmit({
  modalSelector: ".modal_type_delete_card-js",
})
areYouDeletingCardPopup.setEventListeners();



//new popup for when you decide to change the user's profile pic

const changeProfilePicPopup = new PopupWithForm({
  modalSelector: ".modal_type_changeprofilepic-js",
  handleFormSubmit: handleChangeAvatarProfilePic
})
changeProfilePicPopup.setEventListeners()



//FUNCTIONS
function renderCard(individualCard) {
  const cardView = getCardView(individualCard);
  cardList.addItem(cardView);
}

//get a clone of card template and add the new source img and text it takes each obj iteration as cardData
function getCardView(cardData) {
  const card = new Card(cardData, ".card-template", handleImageClick, handleDeleteButton);
  return card.getElementView();
}

//HANDLER FUNCTIONS

//handler to set the text inside the edit  take out the add part of the function
function handleEditButton() {
  const userData = userInfo.getUserInfo();
  //turn it into an arrow func prevent default and rearrange the value and text content and close the modal
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userDescription; //profileDescription.textContent;
  // profileEditModal.classList.add("modal_opened");
  editProfileForm.open();

}

//handler to set the text inside the edit
function handleAddButton() {

  addCardForm.open();
}

//handler function to update text inside edit profile
function handleProfileEditSubmit(profileData) {

  userInfo.setUserInfo(profileData);
  editProfileForm.close();
  //closePopUp(profileEditModal);
}

function handleCardAddSubmit( newCardData) {

  const name = newCardData.title; //e.target.title.value // title is the name attribute
  const link = newCardData.link; //e.target.link.value

  const newCard = getCardView({
    name,
    link,
  });

  cardList.addItem(newCard);
  addCardForm.close();
  addFormValidator.disabledButton();

}

function handleImageClick(name, link) {
  imagePopup.open({
    name,
    link,
  });
}

function handleDeleteButton() {
  areYouDeletingCardPopup.open();
}

//TODO make it so that you can change the img based on the url provided
function handleChangeAvatarProfilePic(){
changeProfilePicPopup.open()
}


//EVENT LISTENERS
profileEditBtn.addEventListener("click", handleEditButton);
cardAddBtn.addEventListener("click", handleAddButton);
changeAvatarIcon.addEventListener("click", handleChangeAvatarProfilePic)



//Using exported api variable from API Class
api
  .getInitialCards()
  .then((res) => console.log("Card Data:", res))
  .catch((error) => console.log(">>ERROR", error));