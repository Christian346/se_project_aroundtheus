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
   this._modalForm = this._modalElement.querySelector('.modal__form');
  }
   // this passes id and cardELement to the thishandlesubmitcallback on set event listeners below
   setSubmitAction(action){ // is recieves a function and assigns it to the handle submit callback
    //action will be delete via api it will execute that action
    this._handleSubmitCallback = action//its equal to the deletion for the API
   }

   setEventListeners(){
   this._modalForm.addEventListener('submit' ,(e)=>{
     e.preventDefault();
     this._handleSubmitCallback(); // the callback is only works when you click the submit
   })

   super.setEventListeners()
  }

    setLoadingButtonText(isLoading, loadingText = "Saving...") {
      if (isLoading) {
        return this._submitButton.textContent = loadingText;
      }
      this._submitButton.textContent = "Yes"
    }


}