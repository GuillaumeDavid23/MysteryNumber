var ramdomNumber = Math.floor((Math.random() * 100)+1);
var count = 0;
var victory = false;
console.log("Nombre aléatoire : " + ramdomNumber);

$("#result").click(function(){
    
    let response = document.getElementById("response");
    let total = document.getElementById("total");
    let countList = document.getElementById("list");
    let listElement = document.createElement("li")
    let userChoice =  document.getElementById("number").value;
    if(userChoice > 0 && userChoice <= 100){
        count += 1;
        
        if (userChoice > ramdomNumber) {
            response.innerHTML = "Le nombre mystère est plus petit";
        }
        else if (userChoice < ramdomNumber){
            response.innerHTML = "Le nombre mystère est plus grand";
        }
        else if(userChoice == ramdomNumber) {
            response.innerHTML = "Bravo ! Vous avez trouvez le nombre mystère qui était : " + ramdomNumber;
            victory = true;
        }

        total.innerHTML = "Nombre d'essai : " + count;
        listElement.innerHTML = `Essai numéro ${count} : ${userChoice}`;
        countList.appendChild(listElement);
    }
    else{
        response.innerHTML = "Veuillez choisir un nombre compris entre 1 et 100";
    }
    
});