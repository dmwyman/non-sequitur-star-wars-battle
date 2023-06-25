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
// *********************************
// *********************************
// *********************************
/*
const getStarWarsData = async () => {
  const response = await fetch('https://swapi.dev/api/people/')
  const data = await response.json()
  // console.log(data)
  results = data.results
  console.log(results)
  for (const char of results) {
    console.log(`${char.name} has ${char.eyeColor} eyes`)
    console.log(char.eye_color)
  }

  return results
}

const run = getStarWarsData()
console.log(run)
*/
// *********************************
// *********************************
// *********************************

const getStarWarsCharData = async () => {
  const response = await fetch(
    `https://swapi.dev/api/people/${Math.floor(Math.random() * (83 - 1) + 1)}/`
  )
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(
      `Sorry, something went wrong and we cannot fetch the data your requested`
    )
  }

  return data
}

// const run2 = getStarWarsCharData()
// console.log(run2)

getStarWarsCharData()
  .then((data) => console.log('resolved: ', data))
  .catch((err) => console.log('unresolved: ', err.message))

// *********************************
// *********************************
// *********************************

// getStarWardData()
//   .then(
//     (results = () => {
//       'resolved:', results
//     })
//   )
//   .catch(
//     (err = () => {
//       console.error('Rejected:', err)
//     })
//   )

/*
fetch('https://swapi.dev/api/people/')
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
*/

// *********************************
// *********************************
// *********************************
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
