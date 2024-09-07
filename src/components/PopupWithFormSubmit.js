import Popup from "./Popup.js";

//this is a child of the popup class
export default class PopupWithFormSubmit extends Popup {
  constructor({
    modalSelector
  }){
    super({
      modalSelector
    }); // to pass the popup to parent
   this._submitButton = this._modalElement.querySelector('.modal__button')
   this._initialText = this._submitButton.textContent.trim();
  }

   setSubmitAction(action){
    //action will be delete via api it will execute that action
    this._handleSubmitCallback = action//its equal to the deletion for the API
   }

   setEventListeners(){
   this._modalElement.addEventListener('submit' ,(e)=>{
   e.preventDefault();
   this._handleSubmitCallback();
   })

   super.setEventListeners()
  }

}