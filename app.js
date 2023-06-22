class StarWarsCharacter {
  constructor(
    charName,
    DOB,
    eyeColor,
    gender,
    hairColor,
    height,
    homeworld,
    mass,
    starships,
    vehicles
  ) {
    this.charName = charName
    this.DOB = DOB
    this.eyeColor = eyeColor
    this.gender = gender
    this.hairColor = hairColor
    this.height = height
    this.homeworld = homeworld
    this.mass = mass
    this.starships = starships
    this.vehicles = vehicles
  }
}
const char1Name = document.querySelector('char1-name')
// const createCharacterCard = () => {

// //create character card html.

// }

fetch('https://swapi.dev/api/people/1/')
  .then((response) => {
    response
      .json()
      .then((json) => {
        console.log(json)
        const starWarsCharacterObject = new StarWarsCharacter(
          json.name,
          json.birth_year,
          json.eye_color,
          json.gender,
          json.hair_color,
          json.height,
          json.homeworld,
          json.mass,
          json.starships,
          json.vehicles
        )

        // const card = createCharacterCard(starWardsCharacterObject)

        // char1Name.textContent = starWarsCharacterObject.charName
        // const dateOfBirth = document.createElement('p')
        // dateOfBirth.textContent = starWarsCharacterObject.DOB
        //?.appendChild(card)
      })
      .catch((error) => console.log(error))
  })
  .catch((error) => console.error(error))

// char1-title.textContent = //fill in from API
/*  

json.results.forEach((pokemon) => { 
fetch(pokemon.url).then((response) => { 
response 
.json() 
.then((pokemonJson) => { 
console.log(pokemonJson) 
const pokemonObject = new PokemonClass( 
pokemonJson.name, 
pokemonJson.id, 
pokemonJson.sprites.front_default 
) 
const card = createPokemonCard(pokemonObject) 
app.appendChild(card) 
}) 
.catch((error) => console.error(error)) 
*/
