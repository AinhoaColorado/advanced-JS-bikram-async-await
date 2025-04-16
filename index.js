//DESARROLLA AQUI TUS SOLUCIONES


// Ejercicios Pokémon

// Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo async/await:

// Antes de empezar, lee la documentación de la API para comprender como funcionan los endpoints

// Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.

async function getRandomPokemon(pokemon){

}

// Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}


// Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

// <section>
//     <img src="url de imagen" alt="nombre del pokemon">
//     <h1>Nombre del pokemon</h1>
// </section>
// Ejercicios Batalla entre Pokemon y perritos
// Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'

// Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio

// Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

// Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

// Ejercicios con Rick and Morty
// Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:

// Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.

// Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

// Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)