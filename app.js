// TODO: create battle button
// TODO: array of functions to determine random winner
//NOTE: people/17/ returns a 404 error

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
const player1GenBtn = document.querySelector('.player-1-gen-btn')
const player2GenBtn = document.querySelector('.player-2-gen-btn')
player1GenBtn.addEventListener('click', () => {
  // console.log('clicked')
  const getStarWarsCharData = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/${Math.floor(
        Math.random() * (83 - 1) + 1
      )}/`
    )
    const data = await response.json()

    if (response.status !== 200) {
      throw new Error(
        `Sorry, something went wrong and we cannot fetch the data your requested. Please try again.`
      )
    }

    return data
  }
  // ************* GET additional data  (homeworld, starships, vehicles)
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

  // Get and display data
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
      // console.log(character.homeworld)
      // console.log(character.starships)
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

      // Homeworld
      const planet = getMoreCharData(character.homeworld)
        .then((data) => {
          charHomeworld.textContent = `Homeworld: ${data.name}`
        })
        .catch((err) => {
          console.log(`unresolved: ${err.message}`)
        })

      // Starships
      if (character.starships.length === 1) {
        const starships = getMoreCharData(character.starships)
          .then((data) => {
            charStarships.textContent = `Starships: ${data.name}`
          })
          .catch((err) => {
            console.log(`unresolved: ${err.message}`)
          })
      } else if (character.starships.length > 1) {
        starshipsArray = character.starships
        const starshipsDisplayArray = []
        for (ship of starshipsArray) {
          getMoreCharData(ship)
            .then((data) => {
              // console.log(data)
              console.log(data.name)
              // const starshipsDisplayArray = []
              starshipsDisplayArray.push(data.name)
              charStarships.textContent = `Starships: ${starshipsDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        charStarships.textContent = `Starships: None or Unknown`
      }

      // Vehicles
      if (character.vehicles.length === 1) {
        const vehicles = getMoreCharData(character.vehicles)
          .then((data) => {
            charVehicles.textContent = `Vehicles: ${data.name}`
          })
          .catch((err) => {
            console.log(`unresolved: ${err.message}`)
          })
      } else if (character.vehicles.length > 1) {
        vehiclesArray = character.vehicles
        const vehiclesDisplayArray = []
        for (vehicle of vehiclesArray) {
          getMoreCharData(vehicle)
            .then((data) => {
              // console.log(data)
              console.log(data.name)
              // const starshipsDisplayArray = []
              vehiclesDisplayArray.push(data.name)
              charVehicles.textContent = `Vehicles: ${vehiclesDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        charVehicles.textContent = `Vehicles: None or Unknown`
      }
    })
    .catch((err) => console.log(`unresolved: ${err.message}`))
})

// Player 2 Generation
player2GenBtn.addEventListener('click', () => {
  // console.log('clicked')
  const getStarWarsCharData = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/${Math.floor(
        Math.random() * (83 - 1) + 1
      )}/`
    )
    const data = await response.json()

    if (response.status !== 200) {
      throw new Error(
        `Sorry, something went wrong and we cannot fetch the data your requested. Please try again.`
      )
    }

    return data
  }
  // ************* GET additional data  (homeworld, starships, vehicles)
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
  // Get and display data
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
      // console.log(character.homeworld)
      // console.log(character.starships)
      const char2Name = document.querySelector('#char2-name')
      const char2BirthYear = document.querySelector('#char2-birth-year')
      const char2EyeColor = document.querySelector('#char2-eye-color')
      const char2Gender = document.querySelector('#char2-gender')
      const char2HairColor = document.querySelector('#char2-hair-color')
      const char2Height = document.querySelector('#char2-height')
      const char2Mass = document.querySelector('#char2-mass')
      const char2Homeworld = document.querySelector('#char2-homeworld')

      const char2Starships = document.querySelector('#char2-starships')
      const char2Vehicles = document.querySelector('#char2-vehicles')
      char2Name.textContent = `${character.charName}`
      char2BirthYear.textContent = `Year of Birth: ${character.DOB}`
      char2EyeColor.textContent = `Eye Color: ${character.eyeColor}`
      char2Gender.textContent = `Gender: ${character.gender}`
      char2HairColor.textContent = `Hair Color: ${character.hairColor}`
      char2Height.textContent = `Height: ${character.height}`
      char2Mass.textContent = `Mass: ${character.mass}`

      // Homeworld
      const planet = getMoreCharData(character.homeworld)
        .then((data) => {
          char2Homeworld.textContent = `Homeworld: ${data.name}`
        })
        .catch((err) => {
          console.log(`unresolved: ${err.message}`)
        })

      // Starships
      if (character.starships.length === 1) {
        const starships = getMoreCharData(character.starships)
          .then((data) => {
            char2Starships.textContent = `Starships: ${data.name}`
          })
          .catch((err) => {
            console.log(`unresolved: ${err.message}`)
          })
      } else if (character.starships.length > 1) {
        starshipsArray = character.starships
        const starshipsDisplayArray = []
        for (ship of starshipsArray) {
          getMoreCharData(ship)
            .then((data) => {
              // console.log(data)
              console.log(data.name)
              // const starshipsDisplayArray = []
              starshipsDisplayArray.push(data.name)
              char2Starships.textContent = `Starships: ${starshipsDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        char2Starships.textContent = `Starships: None or Unknown`
      }

      // Vehicles
      if (character.vehicles.length === 1) {
        const vehicles = getMoreCharData(character.vehicles)
          .then((data) => {
            char2Vehicles.textContent = `Vehicles: ${data.name}`
          })
          .catch((err) => {
            console.log(`unresolved: ${err.message}`)
          })
      } else if (character.vehicles.length > 1) {
        vehiclesArray = character.vehicles
        const vehiclesDisplayArray = []
        for (vehicle of vehiclesArray) {
          getMoreCharData(vehicle)
            .then((data) => {
              // console.log(data)
              console.log(data.name)
              // const starshipsDisplayArray = []
              vehiclesDisplayArray.push(data.name)
              char2Vehicles.textContent = `Vehicles: ${vehiclesDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        char2Vehicles.textContent = `Vehicles: None or Unknown`
      }
    })
    .catch((err) => console.log(`unresolved: ${err.message}`))
})

// *********************************
// *********************************
// *********************************
const battleBtn = document.querySelector('.battle-btn')
battleBtn.addEventListener('click', () => {
  console.log(`clicked`)
  //HERE
})
