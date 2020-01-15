// $('a').click(function(event){
//     event.preventDefault(); 
// });

var button = document.getElementById("button");
var draft = document.getElementById("draft");
var notdraft = document.getElementById("notdraft");


button.onclick = function() {
    if (Math.random() <= 0.2) {
        draft.style.display = 'block'
        notdraft.style.display = 'none'
    } else {
        notdraft.style.display = 'block'
        draft.style.display = 'none'
    }
};