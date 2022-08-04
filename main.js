/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */
console.log(pokemon);

/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */

const pokeNameHeading = document.getElementById("poke_name");
pokeNameHeading.innerHTML = pokemon[0].name + " # " + pokemon[0].id;

const pokeImg = document.getElementById("poke_img");
pokeImg.src = pokemon[0].image[0];

const typeHeading = document.getElementById("poke_types");
typeHeading.innerHTML = pokemon[0].type[0] + "/" + pokemon[0].type[1] + " type";

const statDivs = document.querySelectorAll("#poke_stats div");
statDivs.forEach(function(statDiv){
    let stat = statDiv.id;
    let statWidth = (pokemon[0].base[stat] / 100)*400;
    statDiv.style["width"] = statWidth + "px";
})

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */

function getPokemonData(){
    let randomIndex = Math.floor(Math.random()*pokemon.length);
    let randomPokemon = pokemon[randomIndex];
    pokeNameHeading.innerHTML = randomPokemon.name + " # " + randomPokemon.id;
    pokeImg.src = randomPokemon.image[0];
    typeHeading.innerHTML = randomPokemon.type[0] + "/" + randomPokemon.type[1] + " type";
    statDivs.forEach(function(statDiv){
        let stat = statDiv.id;
        let statWidth = (randomPokemon.base[stat] / 100)*400;
        statDiv.style["width"] = statWidth + "px";
    })
}

const randStarterButton = document.getElementById("random_btn");
randStarterButton.onclick = function(event){
    event.preventDefault();
    getPokemonData();
}