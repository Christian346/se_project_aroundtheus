//function to close the modal

export function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  /*profileEditModal*/
  document.removeEventListener('keydown', escapeModalHandler)
}

export function openPopUp(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener('keydown', escapeModalHandler)
}

export function escapeModalHandler(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector('.modal_opened')
    closePopUp(openedPopup)
  }
}

