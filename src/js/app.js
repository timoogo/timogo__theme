console.log('hello mix');

let section_list = document.querySelectorAll('section'); // returns NodeList
let section_array = [...section_list]; // converts NodeList to Array
section_array.forEach(section => {
    section.addEventListener('click', bg())
});
function bg(){
    this.dataset.is_filled = this.dataset.is_filled == "true" ? "false" : true;
}