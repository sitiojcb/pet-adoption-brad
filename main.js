const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

async function start() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromise.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;
  // console.log("el fetch...", ourTemperature);
  document.querySelector("#temperature-output").textContent = ourTemperature;
}

start();
// pets area
async function petsArea(params) {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  //console.log(petsData);
  petsData.forEach((pet) => {
    const clone = template.content.cloneNode(true);
    //el template tiene que ser dinamico
    clone.querySelector("h3").textContent = pet.name;
    clone.querySelector(".pet-description").textContent = pet.description;
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear);
    clone.querySelector(".pet-card-photo img").src = pet.photo;
    clone.querySelector(
      ".pet-card-photo img"
    ).alt = `A ${pet.species} named ${pet.name} `;
    //como paso intermedio los junto a todos los que vienen del array en un wrapper
    wrapper.appendChild(clone);
  });
  //una vez tengo todos los agrega finalmente al div
  document.querySelector(".list-of-pets").appendChild(wrapper);
}
petsArea();

//crep ;a funcion para calcular la edad y mostrar mensaje
function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  if (age == 1) {
    return "1 year old.";
  }
  if (age == 0) {
    return "Less than a year old.";
  }
  // return age + " years old."; o bien
  return `${age} years old.`;
}
