//menu
document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
//Greeting section
const greetingText = "Good Afternoon";
document.querySelector("#greeting").innerHTML = greetingText;
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 30;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${temperature.toFixed(2)}°C.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${celsiusToFahrenheit(temperature).toFixed(2)}°F.`;
document.querySelector("p#weather").innerHTML = celsiusText;

//Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
document.querySelector(".weather-group").addEventListener("click", (event) => {
  if (event.target.id === "celsius") {
    document.querySelector("p#weather").innerHTML = celsiusText;
  } else if (event.target.id === "fahrenheit") {
    document.querySelector("p#weather").innerHTML = fahrText;
  }

})

setInterval(() => {
  const localTime = new Date();
  document.querySelector("span[data-time='hours']").innerHTML = localTime.getHours().toString().padStart(2, "0");
  document.querySelector("span[data-time='minutes']").innerHTML = localTime.getMinutes().toString().padStart(2, "0");
  document.querySelector("span[data-time='seconds']").innerHTML = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);