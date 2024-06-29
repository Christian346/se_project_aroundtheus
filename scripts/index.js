let initialCards = [
  {
    name: "El Pico Duarte",
    link: "https://unsplash.com/photos/forest-covered-with-fogs-W7oPDwcqccQ",
  },
  {
    name: "Mount Rushmore",
    link: "https://unsplash.com/photos/a-group-of-presidents-carved-into-the-side-of-a-mountain-JqR0rtygBfM",
  },
  {
    name: "Yellowstone Park",
    link: "https://unsplash.com/photos/green-trees-under-blue-sky-and-white-clouds-during-daytime-eprFKRjtoE0",
  },
  {
    name: "The Everglades",
    link: "https://unsplash.com/photos/leafless-trees-between-river-rTkEjSss93U",
  },
  {
    name: "Death Valley",
    link: "https://unsplash.com/photos/brown-concrete-road-during-daytime-2TQwrtZnl08",
  },
  {
    name: "Bahia de las Aguilas",
    link: "https://unsplash.com/photos/brown-rock-formation-beside-blue-sea-under-blue-sky-and-white-clouds-during-daytime-EEwfeFr6J44",
  },
];

let profileEditBtn = document.querySelector(".lowheader__editbutton");
let profileEditModal = document.querySelector(".modal");
let profileModalCloseBtn = document.querySelector(".modal__close")


profileEditBtn.addEventListener("click", addEditButton )/*()=>{the body of toggle edit button could go here} */
profileModalCloseBtn.addEventListener("click",()=>{
  profileEditModal.classList.remove('modal_opened')
})
function addEditButton(){
  profileEditModal.classList.add("modal_opened")
}