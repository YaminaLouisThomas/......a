function plus(){

    var place = document.querySelector(".mise_en_place");
    var newDiv = document.createElement("div"); 
    place.appendChild(newDiv)
    var select = document.querySelectorAll("div");
    var selectDiv = select[select.length - 1]
    console.log(selectDiv)

    var newlabel = document.createElement("Label");
    newlabel.setAttribute('for', 'pseudo');
    newlabel.innerHTML = "Pseudo "
    
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('class', 'pseudo');
    
    selectDiv.appendChild(newlabel);
    selectDiv.appendChild(newInput);
    
   
}

function recuperation(){
    var recuperation = document.querySelectorAll(".pseudo");
    var savePseudo = [];
    for (var i = 0; i < recuperation.length; i++){
        savePseudo.push(recuperation[i].value);
    }
    console.log(savePseudo);
    
}


    




