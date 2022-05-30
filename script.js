

let meatAd = 150;
let meatCh = 50;
let beerValue = 660;
let waterValue = 500;
let sodaValue = 300;

let children = document.getElementById('chInput');
let adults = document.getElementById('adInput');
let duration = document.getElementById('duration');




let button = document.getElementById('button');

button.addEventListener('click', () => {

    

    let meat = ((meatAd * adults.value * duration.value) + (meatCh * children.value * duration.value)) / 1000;   
    
        if (meat < 1.0){
            document.getElementById("meat").innerHTML = 
                `<img class="results-img" src="./assets/carne.png" >
                 ${parseFloat(meat)} gramas de carne.`
    } 
        else{
            document.getElementById("meat").innerHTML = 
            `<img class="results-img" src="./assets/carne.png" >
            ${parseFloat(meat)} kgs de carne.`
    }


    let beer = (beerValue * adults.value) * duration.value;

        document.getElementById("beer").innerHTML =
        `<img class="results-img" src="./assets/cerveja.png">
        ${parseInt(beer / 350)} latinhas de cerveja.`

    let water = ((waterValue * adults.value * duration.value) + (waterValue * children.value * duration.value)) / 1000 ;

        document.getElementById("water").innerHTML = 
        `<img class="results-img" src="./assets/garrafa-de-agua.png"> 
        ${water} litros de água.`
    
    let soda = ((sodaValue * adults.value * duration.value) + (sodaValue * children.value * duration.value)) / 1000 ;

         document.getElementById("soda").innerHTML = 
         `<img class="results-img" src="./assets/soda.png"> 
         ${soda} litros de Refrigerante.`

         document.querySelector('.results').style.display = "flex";
})
