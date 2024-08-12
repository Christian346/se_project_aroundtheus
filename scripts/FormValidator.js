class FormValidator {
  constructor(settings, formElementSelector) {

    this._settings = settings
    this._form = /*document.querySelector(*/formElementSelector//) //queryselect for whichever form selector
    this._inputList = [...this._form.querySelectorAll(settings.inputSelector)] //selects all inputs for that specific form
    this._submitButton = this._form.querySelector(settings.submitButtonSelector)

    this._inputSelector = settings.inputSelector /*this._form.querySelector*/ /*(/settings.inputSelector);*/
    // this._submitButton = settings.submitButtonSelector;
    this._inactiveButton = settings.inactiveButtonClass /*this._form.querySelector(settings.inactiveButtonClass);*/
    this._inputError = settings.inputErrorClass /*this._form.querySelector(settings.inputErrorClass);*/
    this._error = settings.errorClass /*this._form.querySelector(settings.errorClass);*/

    //this._settings = settings; //this refers to the scope that it is within
  }

  // bring all functionality into methods

  _showInputError(inputEl) {

    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.add(this._settings.inputErrorClass); // makes it red
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._settings.errorClass)
  } //good


  _hideInputError(inputEl) {

    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.remove(this._settings.inputErrorClass); // makes it red
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._settings.errorClass)
  }
  //good


  _hasInvalidInput() {
    return !this._inputList.every((inputEl) => inputEl.validity.valid)
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }

  //no need to pass parameters just use the this properties!
  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass) //maybe inside parenthis has to be this._inactive check for later
      this._submitButton.disabled = true; //shouldn't this make it so that the button is disabled by default?
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass)
      this._submitButton.disabled = false;
    }
  }


  _setEventListeners() {
    // this._inputEls = [...this._form.querySelectorAll(this._inputSelector /*configObj.formSelector*/ )]
    //this._submitButton = this._form.querySelector(this._submitButtonSelector);

    //loop through all the inputs to see if all are valid
    this._inputList.forEach(inputEl => {
      inputEl.addEventListener('input', (e) => {
        //console.log(inputEl) //e.target is the same as inputEl in this case
        this._checkInputValidity(inputEl)
        this._toggleButtonState(); //then bring in toggle button state
      })
    })
  }


  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    //setEventListeners(individualForm, configObj);
    this._setEventListeners()
  }
}

export default FormValidator;
//ill need the for element and the config obj
/*
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}
*/


/*
//these 2 will be transfered to index.js
const editFormValidator = new FormValidator(settings, editForm); //for editing the name
editFormValidator.enableValidation();
*/
//const addFormValue = new FormValidator(settings, addForm); //for adding a card