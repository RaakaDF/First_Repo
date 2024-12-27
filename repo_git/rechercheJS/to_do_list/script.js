var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function() {
    //verifier si l'input n'est pass vide
    if(inputField.value != "") {
        // si l'entrée n'est pas vide, créer un paragraphe
         var paragraph = document.createElement('p')
    }
    // valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value;

    // styliser le paragraphe
    paragraph.classList.add('paragraph_style')

    // insérer le paragraphe dans l'élément toDoContainer
   toDoContainer.appendChild(paragraph);

   // vider l'input quand le paragraph est ajouté
   inputField.value = "";
}