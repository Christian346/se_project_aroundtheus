class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
    //this._settings = settings; //this refers to the scope that it is within
  }

  // bring all functionality into methods

  _showInputError(inputEl, errorMessage) {

    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.add(this._inputErrorClass); // makes it red
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass)
  } //good


  _hideInputError(inputEl, errorMessage) {
    const errorMessageEl = this._individualForm.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.remove(this._inputErrorClass); // makes it red
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass)
  }
 //good


  _hasInvalidInput(inputEls) {
    return !this._inputEls.every((inputEl) => inputEl.validity.valid)
  }

  _checkInputValidity(inputEl, /*configObj*/) {
      if (!inputEl.validity.valid) {
        return showInputError(this._form, inputEl, /*configObj*/);
      }
      hideInputError(this._form, inputEl, /*configObj*/);
    }//check this part

   //no need to pass parameters just use the this properties!
  _toggleButtonState(inputEls, submitButton, inactiveButtonClass) {
    if (hasInvalidInput(this._inputEls)) {
      this._submitButton.classList.add(this._inactiveButtonClass) //maybe inside parenthis has to be this._inactive check for later
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.disabled = false;
    }
  }


  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector /*configObj.formSelector*/ )]
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    //loop through all the inputs to see if all are valid
    inputEls.forEach(inputEl => {
      inputEl.addEventListener('input', (e) => {
        //console.log(inputEl) //e.target is the same as inputEl in this case
        checkInputValidity(this._form, inputEl, configObj)
        toggleButtonState(inputEls, submitButton, configObj); //then bring in toggle button state
      })
    })
  }


  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
//setEventListeners(individualForm, configObj);
  }
}
//ill need the for element and the config obj
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

export default FormValidator;

/*
//these 2 will be transfered to index.js
const editFormValidator = new FormValidator(settings, editForm); //for editing the name
editFormValidator.enableValidation();
*/
//const addFormValue = new FormValidator(settings, addForm); //for adding a card



