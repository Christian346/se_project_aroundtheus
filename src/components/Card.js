class Card {
  //if the constructor expects and object the order of the expected properties does not matter! in this case it does because it expects more things than an obj
  constructor(data, cardSelector, handleImageClick,handleDeleteButton, handleLikeClickButton) {
    // there's a local variable called handleImageClick
    // with value the same as whatever was passed as third argument
    this._name = data.name; // the instances make reference to the objects properties and are passed from index when the class is instanciated
    this._link = data.link;

    // in the data object there is an isLiked property
    // save it to this


    this._id = data._id //mongodb database has this convention with an underscore
    this.isLiked = data.isLiked;

    this._cardSelector = cardSelector
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeClickButton = handleLikeClickButton;

    //2 spaces
  }

  _setEventListeners() { //the arrow function binds this to callback into the instance of the class
    // implicit and explicit binding
    this._element.querySelector(".card__image ").addEventListener('click', () => this._handleImageClick(this._name, this._link)); //arrow functions allows to bind the this to the proper context.
    // pass `this` object as an argument
    this._element.querySelector(".card__heart").addEventListener('click', () => this._handleLikeClickButton(this))// by doing that im passing the whole card object
    this._element.querySelector('.card__trashcan-btn').addEventListener('click', () => this._handleDeleteButton(this._id, this._element))// i need whichever paramters are being used when invoked
  }

  /*
      function handleClick(number) {

      }

      document.getElementById('a').addEventListener("click", (event) => handleClick(event, 7));
    }
  */

    // use after succesful request in the . then()
  toggleLikeButton() {
    //this element in this case is the form element
    this._element.querySelector('.card__heart').classList.toggle('card__heart_active');
  }

  _checkLikeState(){
   if(this.isLiked){
    this._element.querySelector('.card__heart').classList.add('card__heart_active');
   }
  }

 /*
  _handleTrashBtn() {
    // this._element.remove();
  }
*/
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
  // returns the element of the card but doesn't render
  //its ok to create a property outside of the constructor
  getElementView() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src /*style.backgroundImage*/ = this._link; /*`url(${this._link})`;*/
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__text").textContent = this._name;
    this._setEventListeners();

    // check if the card is liked
    //    if so, add the active class
    this._checkLikeState();

    return this._element;
  }
}

export default Card;