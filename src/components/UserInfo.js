export default class UserInfo {
  constructor({
    nameSelector,
    descriptionSelector,
    AvatarSelector
  }) {
    this._nameElement = document.querySelector(nameSelector)
    this._descriptionElement = document.querySelector(descriptionSelector)
    this._avatarElement = document.querySelector(AvatarSelector)
  }
  //class is responsible for rendering information about the user on the page. This class should:

  //Take an object with the selectors of two elements into the constructor: one
  //for the profile’ s name element and one for its job element.
  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent
    }
  }
  //Have a public method named getUserInfo(), which returns an object containing information about the user.This method will be handy
  //for cases when it 's necessary to display the user data in the open form.
  setUserInfo({
    name,
    description,
  }) {
    if (name) this._nameElement.textContent = name;
    if (description) this._descriptionElement.textContent = description
    //curly braces if they are not in the same line
  }
   setUserAvatar({
     picture
   }) {

     if (picture) this._avatarElement.src = picture;
     //curly braces if they are not in the same line
   }
  //Have a public method named setUserInfo(), which takes new user data and adds it to the page.This method should be used after successful submission of the profile form.
  //set info based on whats passed to it
}