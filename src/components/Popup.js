export default class Popup {
  constructor({
    modalSelector
  }) {
    this._modalElement = document.querySelector(modalSelector)
  }
  open() {
    //opens modal or popup
    this._modalElement.classList.add("modal_opened");
    document.addEventListener('keydown', this._handleEscapeClose)

  }
  close() {
    //close modal
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener('keydown', this._handleEscapeClose)
  }
                      //an arrow function binds this to the instance of the popupclass this obj
  _handleEscapeClose = (e) => {
    //listens for esc btn
    if (e.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._modalElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
        this.close();
      }
    })

    //sets  event listeners
    //close btn
    //outside click

  }
  //most of this code should be in utils
}
// read up handle esc function it's written
//You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes, as described below.