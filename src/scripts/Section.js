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
    this._initialArray.forEach((cardItem) => {
      this._renderFunction(cardItem); // call renderer() and pass item to it

    })

  }
  //to add items afterwards
  addItem() {
    this._container.prepend(this._element)
  }

}

//this class exists to specifically to add elements to the DOM