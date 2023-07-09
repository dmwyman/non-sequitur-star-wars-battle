// TODO: Countdown to Ahsoka Aug 23 2023
// TODO: CSS
//NOTE: people/17/ returns a 404 error

// Current Date
const currentDateMsg = document.querySelector('.current-date-msg')
const displayDate = () => {
  const now = new Date()
  currentDateMsg.textContent = now.toDateString()
}
displayDate()
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

// Player 1 Generation
const player1GenBtn = document.querySelector('.player-1-gen-btn')
const char1Name = document.querySelector('#char1-name')
const char1BirthYear = document.querySelector('#char1-birth-year')
const char1EyeColor = document.querySelector('#char1-eye-color')
const char1Gender = document.querySelector('#char1-gender')
const char1HairColor = document.querySelector('#char1-hair-color')
const char1Height = document.querySelector('#char1-height')
const char1Mass = document.querySelector('#char1-mass')
const char1Homeworld = document.querySelector('#char1-homeworld')
const char1Starships = document.querySelector('#char1-starships')
const char1Vehicles = document.querySelector('#char1-vehicles')

// Get Player 1 main data
player1GenBtn.addEventListener('click', () => {
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
  // GET additional data  (homeworld, starships, vehicles)
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
      char1Name.textContent = `${character.charName}`
      char1BirthYear.textContent = `Year of Birth: ${character.DOB}`
      char1EyeColor.textContent = `Eye Color: ${character.eyeColor}`
      char1Gender.textContent = `Gender: ${character.gender}`
      char1HairColor.textContent = `Hair Color: ${character.hairColor}`
      char1Height.textContent = `Height: ${character.height}`
      char1Mass.textContent = `Mass: ${character.mass}`

      // Homeworld
      const planet = getMoreCharData(character.homeworld)
        .then((data) => {
          char1Homeworld.textContent = `Homeworld: ${data.name}`
        })
        .catch((err) => {
          console.log(`unresolved: ${err.message}`)
        })

      // Starships
      if (character.starships.length === 1) {
        const starships = getMoreCharData(character.starships)
          .then((data) => {
            char1Starships.textContent = `Starships: ${data.name}`
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
              char1Starships.textContent = `Starships: ${starshipsDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        char1Starships.textContent = `Starships: None or Unknown`
      }

      // Vehicles
      if (character.vehicles.length === 1) {
        const vehicles = getMoreCharData(character.vehicles)
          .then((data) => {
            char1Vehicles.textContent = `Vehicles: ${data.name}`
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
              vehiclesDisplayArray.push(data.name)
              char1Vehicles.textContent = `Vehicles: ${vehiclesDisplayArray.join(
                ', '
              )}`
            })
            .catch((err) => {
              console.log(`unresolved: ${err.message}`)
            })
        }
      } else {
        char1Vehicles.textContent = `Vehicles: None or Unknown`
      }
    })
    .catch((err) => console.log(`unresolved: ${err.message}`))
})

// Player 2 Generation
const player2GenBtn = document.querySelector('.player-2-gen-btn')
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

player2GenBtn.addEventListener('click', () => {
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
// *********** Battle Event ********
// *********************************
const battleBtn = document.querySelector('.battle-btn')
const battleResponseMessage = document.querySelector('.battle-response-message')
battleBtn.addEventListener('click', () => {
  const battleResponses = [
    //1
    `${char1Name.textContent} wins because ${char1Name.textContent} has ${char1HairColor.textContent} and is from ${char1Homeworld.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has ${char2HairColor.textContent} and is from ${char2Homeworld.textContent}.`,
    //2
    `${char1Name.textContent} wins because ${char1Name.textContent} has ${char1EyeColor.textContent} and has ${char1BirthYear.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has ${char2EyeColor.textContent} and has ${char2BirthYear.textContent}.`,
    //3
    `${char1Name.textContent} wins because ${char1Name.textContent} is ${char1Height.textContent}, has ${char1Mass.textContent}, and has ridden ${char1Starships.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} is ${char2Height.textContent}, has ${char2Mass.textContent}, and has ridden ${char2Starships.textContent}.`,
    //4
    `${char1Name.textContent} wins because ${char1Name.textContent} has ${char1Gender.textContent} and ${char1EyeColor.textContent}, and has ridden ${char1Vehicles.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has ${char2Gender.textContent} and ${char2EyeColor.textContent}, and has ridden ${char2Vehicles.textContent}.`,
    //5
    `${char1Name.textContent} wins because ${char1Name.textContent} is from ${char1Homeworld.textContent}, has ridden ${char1Starships.textContent}, and has ${char1HairColor.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} is from ${char2Homeworld.textContent}, has ridden ${char2Starships.textContent}, and has ${char2HairColor.textContent}.`,
    //6
    `${char1Name.textContent} wins because ${char1Name.textContent} has ${char1BirthYear.textContent}, is ${char1Height.textContent}, and has ridden ${char1Vehicles.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has ${char2BirthYear.textContent}, is ${char2Height.textContent}, and has ridden ${char2Vehicles.textContent}.`,
    //7
    `${char1Name.textContent} wins because ${char1Name.textContent} has ${char1HairColor.textContent}, ${char1EyeColor.textContent}, and is ${char1Gender.textContent}.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has ${char2HairColor.textContent}, ${char2EyeColor.textContent}, and is ${char2Gender.textContent}.`,
    //8
    `${char1Name.textContent} wins because ${char1Name.textContent} is cooler.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} is cooler.`,
    //9
    `${char1Name.textContent} wins because ${char1Name.textContent} is more mysterious.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} is more mysterious.`,
    //10
    `${char1Name.textContent} wins because ${char1Name.textContent} has a better personality, allegedly.`,
    `${char2Name.textContent} wins because ${char2Name.textContent} has a better personality, allegedly.`,
  ]
  const battlePrompt = 'Before a battle, you must select two players!'
  if (char1Name.textContent && char2Name.textContent) {
    battleResponseMessage.textContent =
      battleResponses[Math.floor(Math.random() * (20 - 1) + 1)]
  } else {
    battleResponseMessage.textContent = battlePrompt
  }
})
