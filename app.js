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
      data.homeworld,
      data.mass,
      data.starships,
      data.vehicles
    )
    console.log(character.gender)
    const char1Name = document.querySelector('.char1-name')
    char1Name.textContent = `${character.charName}`
  })
  .catch((err) => console.log('unresolved: ', err.message))

// *********************************
// *********************************
// *********************************
