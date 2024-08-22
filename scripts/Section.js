export default class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._initialArray = items;
    this._renderFunction = renderer
    this._container = containerSelector

  }
  //for initial array
  renderMethod() {
    //rename to items later
    this._initialArray.forEach((item) => {
      this._renderFunction(item);
      /* const card = item.isGrid ? newCard (item , ".card-template_type_user")
  : new DefaultCard(item, ".card-template_type_default");

    const cardElement = card.generateCard();

    // Insert the markup on the page
    // using the setItem() method of the Section() class
    this.setItem(cardElement);
 */


    })

  }
  //to add items afterwards
  addItem() {
    this._container.prepend(this._element)
  }

  /*
    clear() {
      this._container.innerHTML = "";
    }
  */


}

/*
export function renderCard(cardElement, container) {
  //const card = new Card(data, cardSelector)

  // container.prepend(card.getElementView(cardElement));
  container.prepend(cardElement);
}


initialCards.forEach((cardData) => {
  // const cardElement = renderCard(cardData); //get each obj and store it into a variable that will be rendered
  //cardGallerySection.append(cardElement);//apends to the end of the gallery also was used in rendering function
  //const cardView = getCardView(cardData) //get the cardview for each particular object element and store it into a variable
  //i need to use the card element from the card class that and the selector of the template
  // TODO pass a third argument, a function to handle image click
  //const card = new Card(cardData, '.card-template', handleImageClick)
  const cardView = /*card.*/ //getCardView(cardData);
//TODO call cardview function for avoid repeating yourself.
// renderCard(cardView, cardGallerySection) //needs to pass card which is the object iterations and the element in which it will be appended in the gallery
//});


//this class exists to specifically to add elements to the DOM