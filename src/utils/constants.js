export const initialCards = [{
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

export const profileEditBtn = document.querySelector(".lowheader__editbutton");
export const profileEditModal = document.querySelector(".modal_type_edit-js");
export const profileModalCloseBtn = profileEditModal.querySelector(".modal__close");

export const profileTitle = document.querySelector(".lowheader__title");
export const profileDescription = document.querySelector(".lowheader__span");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector("#profile-description-input");

//let profileSaveBtn = document.querySelector('#profilesavebtn')
export const cardAddModal = document.querySelector(".modal_type_add-js");
export const cardAddBtn = document.querySelector("#add-button")
export const cardAddCloseButton = cardAddModal.querySelector("#add-close-button")
export const cardAddForm = cardAddModal.querySelector('#add-card-form')

//find previewImageModal here
export const pictureModal = document.querySelector('.modal_type_picture-js')
export const pictureModalCloseBtn = document.querySelector('#picture-close-button')
export const pictureModalImage = document.querySelector(".modal__pictures") //It’s better to find constants only 1 time at the top of the file so as not to waste resources on searching them again and again when you call a method (function) because searching is a very hard operation for the browser engine
export const pictureModalCaption = document.querySelector(".modal__pictures_alt")

export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const cardTemplate = document.querySelector(".card-template").content.firstElementChild; //grabs content as a fragment and to get the element you need to use its firstelementchild
export const cardGallerySection = document.querySelector(".gallery");
//this variable is where the cards will be appended or rendered
export const modals = document.querySelectorAll(".modal")
export const cardSelector = document.querySelector('.card-template')
//TODO get all trashbin icons

export const deleteCardModal = document.querySelector('.modal_type_delete_card-js')

export const changeAvatarIcon = document.querySelector('.lowheader__editpen')

export const changeAvatarPictureForm = document.querySelector('#changeprofilepic-form')





//VALIDATION

export const validationSettings = {
  formSelector: ".modal__form", //might not be needed
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};