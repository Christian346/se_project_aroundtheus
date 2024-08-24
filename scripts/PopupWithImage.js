import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({
    modalSelector
  }) {
    super({modalSelector});
   // this._modalElement = document.querySelector(modalSelector);
  }

  open(data) {
    const {name,link} = data;
    super.open()
    this._modalElement.querySelector('.modal__pictures').setAttribute('src', link) //go ot the image element and change it to the image source that is  in line 69
    this._modalElement.querySelector('.modal__pictures').alt = name; //set the alt text to the name
    this._modalElement.querySelector('.modal__pictures_alt').textContent = /*cardData.*/ name ;
    //class will need to accept the name and link of the card as arguments and add an image to the popup and the corresponding image src attribute along with a caption for the image. This method should be called in your image click handler in index.js.
  }

}