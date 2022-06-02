

let meatAd = 150;
let meatCh = 50;
let beerValue = 350;
let waterValue = 350;
let sodaValue = 300;

let children = document.getElementById('chInput');
let adults = document.getElementById('adInput');
let duration = document.getElementById('duration');



let button = document.getElementById('button');

button.addEventListener('click', () => {

    

    let meat = ((meatAd * adults.value * duration.value) + (meatCh * children.value * duration.value)) / 1000;   
    
        if (meat < 1.0){
            document.getElementById("meat").innerHTML = 
                `<img class="results-img" src="./assets/meat.png" >
                 ${parseFloat(meat*1000)} g de carne.`
    } 
        else{
            document.getElementById("meat").innerHTML = 
            `<img class="results-img" src="./assets/meat.png" >
            ${parseFloat(meat)} kg de carne.`
    }



    let beer = ((beerValue * 2) * adults.value) * duration.value;

        if (beer < 350){
            document.getElementById("beer").innerHTML =
        `<img class="results-img" src="./assets/beer.png">
        ${parseInt(beer / 350)} latinha de cerveja.`
        } else{
            document.getElementById("beer").innerHTML =
        `<img class="results-img" src="./assets/beer.png">
        ${parseInt(beer / 350)} latinhas de cerveja.`
        }

        

    let water = ((waterValue * adults.value * duration.value) + (waterValue * children.value * duration.value)) / 1000 ;

       if (water < 1.0){
        document.getElementById("water").innerHTML = 
        `<img class="results-img" src="./assets/water.png"> 
        ${water*1000} ml de água.`
       } else{
        document.getElementById("water").innerHTML = 
        `<img class="results-img" src="./assets/water.png"> 
        ${water} litros de água.`
       }
        
    
    let soda = ((sodaValue * adults.value * duration.value) + (sodaValue * children.value * duration.value)) / 1000 ;

         if (soda < 1.0){
            document.getElementById("soda").innerHTML = 
            `<img class="results-img" src="./assets/soda.png"> 
            ${soda*1000} ml de Refrigerante.`
         } else {
            document.getElementById("soda").innerHTML = 
            `<img class="results-img" src="./assets/soda.png"> 
            ${soda} litros de Refrigerante.`
         }

         console.log(soda)

         document.querySelector('.results').style.display = "flex";
})
