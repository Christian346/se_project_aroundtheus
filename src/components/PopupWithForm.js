//import Popup from "./Popup.js"; //does it need .js at the end?

import Popup from "./Popup.js";

//this is a child of the popup class
export default class PopupWithForm extends Popup {
  constructor({modalSelector, handleFormSubmit}) {
    super({
      modalSelector
    }); // to pass the popup to parent

    this._modalForm = this._modalElement.querySelector('.modal__form') // now we go access to this thanks to passing it thru the super()
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._modalForm.querySelectorAll('.modal__input')
  }
  _getinputValues(){
    const formValues = {}
    this._inputList.forEach((input)=>{
    formValues[input.name] = input.value;
    //sets key of that property equals to the name of each form
    })
    //which collects data from all the input fields and returns it as an object. This data should then be passed to the submission handler as an argument.
   return formValues;
  }
  setEventListeners(){

    //class should add a submit event listener to the form and call the setEventListeners() method of the parent class.
    //this for the submit listenters
    this._modalForm.addEventListener('submit',(evt)=>{
      evt.preventDefault();
      this._handleFormSubmit(this._getinputValues());

    })
     super.setEventListeners();
  }

  close() {
    this._modalForm.reset()
    super.close();
  }

}

// in index .js
//const newCardPopup = new PopupWithForm('.modal_type_add-js', () => {
//});
//newCardPopup.open()
//newCardPopup.close()