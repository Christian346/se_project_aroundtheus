//i'd like to keep this a reference code to review for the future even if it's not needed anymore please.


// enabling validation by calling enableValidation()
// pass all the settings on call

/*make sure your properties match the correct classes! */
/*
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

function showInputError(individualForm, inputEl, {
  inputErrorClass,
  errorClass
}) {
  // console.log('#' + inputEl.id + '-error')
  //console.log(`#${inputEl.id}-error`)
  //const{inputErrorClass} = configObj
  const errorMessageEl = individualForm.querySelector(`#${inputEl.id}-error`)
  inputEl.classList.add(inputErrorClass); // makes it red
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass)
} //good


function hideInputError(individualForm, inputEl, {
  inputErrorClass,
  errorClass
}) {
  const errorMessageEl = individualForm.querySelector(`#${inputEl.id}-error`)
  inputEl.classList.remove(inputErrorClass); // makes it red
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass)
} //good

//will run each time theres a change in the form for each element in it
function checkInputValidity(individualForm, inputEl, configObj) {
  if (!inputEl.validity.valid) {
    return showInputError(individualForm, inputEl, configObj);
  }
  hideInputError(individualForm, inputEl, configObj);

} //good




function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid) // if you use {} in there you have to return
}

function disableButton(submitButton, {
  inactiveButtonClass
}) { //adds class to disable it
  submitButton.classList.add(inactiveButtonClass)
  submitButton.disabled = true
}

function enableButton(submitButton, {
  inactiveButtonClass
}) { //removes it
  submitButton.classList.remove(inactiveButtonClass)
  submitButton.disabled = false
}

function toggleButtonState(inputEls, submitButton, {
  inactiveButtonClass
}) {

  if (hasInvalidInput(inputEls)) {
    disableButton(submitButton, {
      inactiveButtonClass
    });
  } else {
    enableButton(submitButton, {
      inactiveButtonClass
    })
  }

  /*
    if (hasInvalidInput(inputEls)) {
      submitButton.classList.add(inactiveButtonClass)
      submitButton.disabled = true
      return;
    }
    submitButton.classList.remove(inactiveButtonClass)
    submitButton.disabled = false
  */ //good
/*
  let foundInvalid = false;
    inputEls.forEach((inputEl)=>{
       if(!inputEl.validity.valid){
        foundInvalid = true;
       }
    })
    if(foundInvalid){
      submitButton.classList.add(inactiveButtonClass)
      submitButton.disabled = true
    }else{
      submitButton.classList.remove(inactiveButtonClass)
      submitButton.disabled= false
    }
  */ //this works as intended
//} //good

/*
function setEventListeners(individualForm, configObj) {
  //look for all inputs inside of from
  const {
    inputSelector,
    submitButtonSelector
  } = configObj // take out a property and create a variable called inputselector


  const inputEls = [...individualForm.querySelectorAll(inputSelector /*configObj.formSelector*/ // )]
/*
  const submitButton = individualForm.querySelector(submitButtonSelector);
  //loop through all the inputs to see if all are valid
  inputEls.forEach(inputEl => {
    inputEl.addEventListener('input', (e) => {
      //console.log(inputEl) //e.target is the same as inputEl in this case
      checkInputValidity(individualForm, inputEl, configObj)
      toggleButtonState(inputEls, submitButton, configObj);
    })
  })
*/

//if input not valid
//grab validation message
//add error class to input to make it red
// display error message
//disable btn
//if all inputs are valid
//enable button
//reset error messages
//}

//order of parameters matter!

//function enableValidation(configObj) {
//const formEls = Array.from(document.querySelectorAll("form"));// list of node items not an array , gotta convert it to an array
//const formEls = [...document.querySelectorAll(configObj.formSelector /*".modal__form"*/ )]; //spread op to copy the items inside it kinda of like array.from() needs to be inside [] cuz it workds with arrays

//formEls.forEach((individualForm) => {
// individualForm.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// setEventListeners(individualForm, configObj);

//})
//}



//enableValidation(config);