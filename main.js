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
    pet.name;
  });
}
petsArea();
