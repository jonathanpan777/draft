// $('a').click(function(event){
//     event.preventDefault(); 
// });

var button = document.getElementById("button");
var draft = document.getElementById("draft");
var notdraft = document.getElementById("notdraft");
var happyjennie = document.getElementById("happyjennie");
var sadjennie = document.getElementById("sadjennie");


button.onclick = function() {
    if (Math.random() <= 0.2) {
        draft.style.display = 'block'
        happyjennie.style.display = 'block'
        notdraft.style.display = 'none'
        sadjennie.style.display = 'none'
    } else {
        notdraft.style.display = 'block'
        sadjennie.style.display = 'block'
        draft.style.display = 'none'
        happyjennie.style.display = 'none'
    }
};