export default class UserInfo{
  constructor({nameSelector , descriptionSelector}){
   this._nameElement = document.querySelector(nameSelector)
   this._descriptionElement = document.querySelector(descriptionSelector)
  }
  //class is responsible for rendering information about the user on the page. This class should:

  //Take an object with the selectors of two elements into the constructor: one
  //for the profile’ s name element and one for its job element.
  getUserInfo(){
    return {userName:this._nameElement.textContent,
          userDescription:this._descriptionElement.textContent}
  }
  //Have a public method named getUserInfo(), which returns an object containing information about the user.This method will be handy
  //for cases when it 's necessary to display the user data in the open form.
setUserInfo({name,description}){
 this._nameElement.textContent = name
 this._descriptionElement.textContent = description
}
  //Have a public method named setUserInfo(), which takes new user data and adds it to the page.This method should be used after successful submission of the profile form.
 //set info based on whats passed to it
}
