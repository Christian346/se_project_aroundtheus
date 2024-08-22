export default class Popup {
  constructor({
    modalSelector
  }){
    this._modalElement = document.querySelector(modalSelector)
  }
  open() {
    //opens modal or popup
  }
  close() {
    //close modal
  }
  _handleEscapeClose() {
    //listens for esc btn
  }
  setEventListeners() {
    //sets  event listeners
  }
  //most of this code should be in utils
}

//You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes, as described below.