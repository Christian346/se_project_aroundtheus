class Card {
  //if the constructor expects and object the order of the expected properties does not matter! in this case it does because it expects more things than an obj
  constructor(data, cardSelector, handleImageClick) {
    // there's a local variable called handleImageClick
    // with value the same as whatever was passed as third argument
    this._name = data.name; // the instances make reference to the objects properties and are passed from index when the class is instanciated
    this._link = data.link;

    this._cardSelector = cardSelector
    this._handleImageClick = handleImageClick;
    //2 spaces
  }

  _setEventListeners() { //the arrow function binds this to callback into the instance of the class
    // implicit and explicit binding
    this._element.querySelector(".card__image ").addEventListener('click', () => this._handleImageClick(this._name, this._link)); //arrow functions allows to bind the this to the proper context.
    this._element.querySelector(".card__heart").addEventListener('click', () => this._handleLikeBtn())
    this._element.querySelector('.card__trashcan-btn').addEventListener('click', () => this._handleTrashBtn())
  }

  /*
      function handleClick(number) {

      }

      document.getElementById('a').addEventListener("click", (event) => handleClick(event, 7));
    }
  */

  _handleLikeBtn() {
    //this element in this case is the form element
    this._element.querySelector('.card__heart').classList.toggle('card__heart_active');
  }

  _handleTrashBtn() {
    this._element.remove();
  }

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
    return this._element;
  }
}

export default Card;