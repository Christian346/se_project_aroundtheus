//find previewImageModal here
const pictureModal = document.querySelector('.modal_type_picture-js')
const pictureModalImage = document.querySelector(".modal__pictures") //It’s better to find constants only 1 time at the top of the file so as not to waste resources on searching them again and again when you call a method (function) because searching is a very hard operation for the browser engine
const pictureModalCaption = document.querySelector(".modal__pictures_alt")

function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  /*profileEditModal*/
  document.removeEventListener('keydown', escapeModalHandler)
}

//if you click escape close the modals
function escapeModalHandler(e) {
  const openedPopup = document.querySelector('.modal_opened')
  if (e.key === "Escape") {
    closePopUp(openedPopup)
  }
}



class Card {
constructor(data, cardSelector){
this._name = data.name;
this._link = data.link;

this._cardSelector = cardSelector
}
_setEventListeners(){
  this._element.querySelector(".card__image ").addEventListener('click', () =>this._handlePreviewPicture); //arrow functions allows to bind the this to the proper context.
  this._element.querySelector(".card__heart").addEventListener('click', ()=>this._handleLikeBtn)
  this._element.querySelector('.card__trashcan-btn').addEventListener('click', ()=>this._handleTrashBtn)
}


_handleLikeBtn() {
  //this element in this case is the form element
 this._element.querySelector('card__heart').classList.toggle('card__heart_active');
}
_handleTrashBtn(){
this._element.remove();
}
_handlePreviewPicture(){
  pictureModalImage.setAttribute('src', cardData.link) //go ot the image element and change it to the image source that is  in line 69
  pictureModalImage.alt = cardData.name; //set the alt text to the name
  pictureModalCaption.textContent = cardData.name // switch the alternate text of the modal
  openPopUp(pictureModal) //open popup function with the (previewimagemodal)
}


_getTemplate(){
  return document
  .querySelector(this._cardSelector)
  .content.querySelector(".card")
  .cloneNode(true);
}

getElementView(){
  this._element = this._getTemplate();
  this._element.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
  this._element.querySelector(".card__text").textContent = this._name;
  this._setEventListeners();
}


}

export default Card;