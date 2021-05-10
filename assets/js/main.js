var ramdomNumber = Math.floor((Math.random() * 100)+1);
var count = 0;
var victory = false;
var countList = document.getElementById("list");
var total = document.getElementById("total");
var response = document.getElementById("response");
var userChoice =  1;
console.log(ramdomNumber)

$("#result").click(function(){
    var listElement = document.createElement("li");
    userChoice =  document.getElementById("number").value;
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
        listElement.classList.add("element");
        countList.appendChild(listElement);
    }
    else{
        response.innerHTML = "Veuillez choisir un nombre compris entre 1 et 100";
    }
    if (victory){
        document.getElementById("reset").classList.remove("d-none");
    }  
});

$("#reset").click(function(){
    total.innerHTML = "Nombre d'essai :" ;
    countList.innerHTML = "";
    count = 0;
    ramdomNumber = Math.floor((Math.random() * 100)+1);
    response.innerHTML = "Le PC a choisi son chiffre.";
    document.getElementById("number").value = "";
    document.getElementById("reset").classList.add("d-none");
});