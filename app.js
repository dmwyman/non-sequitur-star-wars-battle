// TODO: create character generator button/s (one for each char or only one)
// TODO: create battle button

// **TODO**: figure out how to GET/display multiple starships, and vehicles
// TODO: array of functions to determine random winner

class StarWarsCharacter {
  constructor(
    charName,
    DOB,
    eyeColor,
    gender,
    hairColor,
    height,
    mass,
    homeworld,
    starships,
    vehicles
  ) {
    this.charName = charName
    this.DOB = DOB
    this.eyeColor = eyeColor
    this.gender = gender
    this.hairColor = hairColor
    this.height = height
    this.mass = mass
    this.homeworld = homeworld
    this.starships = starships
    this.vehicles = vehicles
  }
}

// ****************************************************
// ************** GET Character Data ******************
// ****************************************************

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

// *********************************
// *********************************
// *********************************

//Planet - Homeworld data
const getMoreCharData = async (url) => {
  const response = await fetch(`${url}`)
  const data = await response.json()
  console.log(data)
  if (response.status !== 200) {
    throw new Error(
      `Sorry, something went wrong and we cannot fetch the data your requested`
    )
  }
  return data
}

// const getStarshipData = async (...url) => {
//   const response = await fetch(`${[...url]}`)
//   const data = await response.json()
//   console.log(data)
//   if (response.status !== 200) {
//     throw new Error(
//       `Sorry, something went wrong and we cannot fetch the data your requested`
//     )
//   }
//   return data
// }

/* Invoke async getStarWarsCharData function */
getStarWarsCharData()
  .then((data) => {
    console.log(data)
    const character = new StarWarsCharacter(
      data.name,
      data.birth_year,
      data.eye_color,
      data.gender,
      data.hair_color,
      data.height,
      data.mass,
      data.homeworld,
      data.starships,
      data.vehicles
    )
    // manipulate DOM
    console.log(character.homeworld)
    console.log(character.starships)
    // console.log(character.starships[(0, 1, 2)])
    const charName = document.querySelector('.char-name')
    const charBirthYear = document.querySelector('.char-birth-year')
    const charEyeColor = document.querySelector('.char-eye-color')
    const charGender = document.querySelector('.char-gender')
    const charHairColor = document.querySelector('.char-hair-color')
    const charHeight = document.querySelector('.char-height')
    const charMass = document.querySelector('.char-mass')
    const charHomeworld = document.querySelector('.char-homeworld')

    const charStarships = document.querySelector('.char-starships')
    const charVehicles = document.querySelector('.char-vehicles')
    charName.textContent = `${character.charName}`
    charBirthYear.textContent = `Year of Birth: ${character.DOB}`
    charEyeColor.textContent = `Eye Color: ${character.eyeColor}`
    charGender.textContent = `Gender: ${character.gender}`
    charHairColor.textContent = `Hair Color: ${character.hairColor}`
    charHeight.textContent = `Height: ${character.height}`
    charMass.textContent = `Mass: ${character.mass}`
    // TODOS BELOW
    const planet = getMoreCharData(character.homeworld)
      .then((data) => {
        charHomeworld.textContent = `Homeworld: ${data.name}`
      })
      .catch((err) => {
        console.log(`unresolved: ${err.message}`)
      })

    if (character.starships.length === 1) {
      const starships = getMoreCharData(character.starships)
        .then((data) => {
          charStarships.textContent = `Starships: ${data.name}`
        })
        .catch((err) => {
          console.log(`unresolved: ${err.message}`)
        })
    } else if (character.starships.length > 1) {
      const starships = getMoreCharData(character.starships)
        .then((data) => {
          // charStarships.textContent = `Starships: ${(data.forEach())}`
          charStarships.textContent = `Starships: more than one`
        })
        .catch((err) => {
          console.log(`unresolved: ${err.message}`)
        })
    } else {
      charStarships.textContent = `Starships: None or Unknown`
    }

    //   const vehicles = getMoreCharData(character.vehicles)
    //     .then((data) => {
    //       charStarships.textContent = `Vehicles: ${data.name}`
    //     })
    //     .catch((err) => {
    //       console.log(`unresolved: ${err.message}`)
    //     })
  })
  .catch((err) => console.log(`unresolved: ${err.message}`))

// *********************************
// *********************************
// *********************************
