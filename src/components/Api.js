class Api {
  constructor(options) {
    // constructor body
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
  }


  //METHODS FOR GET
  getInitialCards() {
    // ...
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(res => /*{
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      }*/
     this._handleResponse(res)
     );
  }


  getInitialUser() {
    // ...
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
      .then(res => this._handleResponse(res));
  }
  //METHODS FOR PATCH
  // this is link because assigned from the function in index
  setAvatarImage(avatar) { // https://...
    // ...  //fetch just allows to  deal with all sorts of requests!
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
        body: JSON.stringify({
          avatar
        }) //accepts an obj as argument and turns into string json formatted.
      })
      .then(res => this._handleResponse(res));
  }
  //its getting an object from the front end
  setUserNameInfo({
    name,
    description
  }) {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
        body: JSON.stringify({
          name,
          about: description //it's making the about key value the same as the description property
        }) //accepts an obj as argument and turns into string json formatted.
      })
      .then(res => this._handleResponse(res));

  }
  //METHODS FOR POST
  postNewCard(name,link){
     return fetch(`${this._baseUrl}/cards`, {
         headers: this._headers,
         method: "POST", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
         body: JSON.stringify({
           name,
           link //it's making the about key value the same as the description property
         }) //accepts an obj as argument and turns into string json formatted.
       })
       .then(res => this._handleResponse(res));
  }

  //METHODS FOR DELETE
  deleteACard(id){
    return fetch(`${this._baseUrl}/cards/${id}`, {
        headers: this._headers,
        method: "DELETE", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
      })
      .then(res => this._handleResponse(res));
  }

  deleteTheCardLikeState(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        headers: this._headers,
        method: "DELETE", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
      })
      .then(res => this._handleResponse(res));
  }

  //METHOD FOR PUT
  addTheCardLikeState(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        headers: this._headers,
        method: "PUT", // "{ "avatar": "https://..." }"  // check diferences between patch and post methods
      })
      .then(res => this._handleResponse(res));
  }


}
// this is the options obj being passed
export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "de932c6e-7e22-469e-9495-2cd43cd1231b",
    "Content-Type": "application/json"
  }
});

/*
User routes, API ENDPOINTS

GET / users / me– Get the current user’ s info
PATCH / users / me– Update your profile information
PATCH / users / me / avatar– Update avatar
Card routes

GET / cards– Get all cards
POST / cards– Create a card
DELETE / cards /: cardId– Delete a card
PUT / cards /: cardId / likes– Like a card
DELETE / cards /: cardId / likes– Dislike a card
*/