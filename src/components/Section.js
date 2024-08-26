export default class Section {
  constructor({
    items,
    renderer
  }, containerOption) {
    this._initialArray = items;
    this._renderFunction = renderer
    this._container = containerOption

  }
  //for initial array
  renderMethod() {
    //rename to items later
    this._initialArray.forEach((cardItem) => {
      this._renderFunction(cardItem); // call renderer() and pass item to it

    })

  }
  //to add items afterwards
  addItem(element) {
    this._container.prepend(element)
  }

}

//this class exists to specifically to add elements to the DOM