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

//once we obtain the data or list from API we will use it with the section class!
/*
const cardList = new Section({
    items: initialCards,
    renderer: (individualCard) => {
      renderCard(individualCard);
    },
  },
  cardGallerySection
);
cardList.renderMethod();
*/

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
  AvatarSelector: ".lowheader__img"
});


// last 2 new popup

//new popup for prompting if will delete a card
const areYouDeletingCardPopup = new PopupWithFormSubmit({
  modalSelector: ".modal_type_delete_card-js",
})
areYouDeletingCardPopup.setEventListeners();

//new popup for when you decide to change the user's profile pic

const changeProfilePicPopup = new PopupWithForm({
  modalSelector: ".modal_type_change_profile_pic-js",
  handleFormSubmit: handleChangeAvatarSubmit
})
changeProfilePicPopup.setEventListeners()



//FUNCTIONS
function renderCard(individualCard) {
  const cardView = getCardView(individualCard);
  cardList.addItem(cardView);
}

//get a clone of card template and add the new source img and text it takes each obj iteration as cardData
function getCardView(cardData) {
  const card = new Card(cardData, ".card-template", handleImageClick, handleDeleteButton, handleCardLikeClick);
  return card.getElementView();
}

//HANDLER FUNCTIONS
//passing the whole card object
function handleCardLikeClick(card) {
  if (!card.isLiked) {
    api.addTheCardLikeState(card._id).then(() => {
      card.isLiked = true;
      card.toggleLikeButton()
    }).catch(console.error);
  } else if (card.isLiked) {
    api.deleteTheCardLikeState(card._id).then(() => {
      card.isLiked = false;
      card.toggleLikeButton()
    }).catch(console.error);
  }

}


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
  editProfileForm.setLoadingButtonText(true)
  //use the api patch method here to set the initial user data
  api.setUserNameInfo(profileData) //when requests succeds use then and catch
    .then((res) => {
      console.log(res)
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
      }); //this updates the user info to the resopnse received
    }).catch(console.error).finally(() => {
      editProfileForm.setLoadingButtonText(false)
    });


  editProfileForm.close();
  //closePopUp(profileEditModal);
}

function handleCardAddSubmit(newCardData) {

  const name = newCardData.title; //e.target.title.value // title is the name attribute
  const link = newCardData.link; //e.target.link.value



  api.postNewCard(name, link).then((res) => { //creating the card in the server ,res is the object with all the properties in the server
    const newCard = getCardView(
      /*{
              name,
              link,
            }*/
      res); //just on user interface
    cardList.addItem(newCard);
    addCardForm.close();
  }).catch(error => console.error(error));


  addFormValidator.disabledButton();

}

function handleImageClick(name, link) {
  imagePopup.open({
    name,
    link,
  });
}

//needs access to the to the id of the card and the card element
//we want to make use of a closure
function handleDeleteButton(id, cardElement) {
  areYouDeletingCardPopup.open();

  function handleDeleteSubmit() {
    // need access to card ID and card element
    api.deleteACard(id).then(() => {
      cardElement.remove();
      areYouDeletingCardPopup.close();
    })
  }

  areYouDeletingCardPopup.setSubmitAction(handleDeleteSubmit)
}

//TODO make it so that you can change the img based on the url provided
function handleChangeAvatarProfilePic() {
  changeProfilePicPopup.open()
}
// will take the value of the link property in the object received as argument
function handleChangeAvatarSubmit({
  link //the link is the url needed to work with this project
}) {
  //  let avatarImg = document.querySelector('.lowheader__img')
  // avatarImg.src = link;

  //patch method for the avatar using the api
  api.setAvatarImage(link)
    .then((res) => {
      console.log(res)
      userInfo.setUserAvatar({
        picture: res.avatar
      })
      changeProfilePicPopup.close()
    })
    .catch((error) => console.log(">>ERROR", error))

}


//EVENT LISTENERS
profileEditBtn.addEventListener("click", handleEditButton);
cardAddBtn.addEventListener("click", handleAddButton);
changeAvatarIcon.addEventListener("click", handleChangeAvatarProfilePic)


//-----USING API
let cardList; // this will be the default card that's returned from the server

//Using exported api variable from API Class

//Set the initial Card
api
  .getInitialCards()
  .then((res) => {
    // console.log("Card Data:", res)
    /*const*/
    cardList = new Section({
        items: res,
        renderer: (individualCard) => {
          renderCard(individualCard);
        },
      },
      cardGallerySection
    );
    cardList.renderMethod();
  })
  .catch((error) => console.log(">>ERROR", error));


// Set the initial User picture description
api.getInitialUser()
  .then((res) => {
    //set user info at start
    userInfo.setUserInfo({
      name: res.name,
      description: res.about,
    });
    //set image at start
    userInfo.setUserAvatar({
      picture: res.avatar
    })
  }).catch((error) => console.log(">>ERROR", error))