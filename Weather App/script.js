const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const Icon1 = document.querySelector(".icon-1");
const Icon2 = document.querySelector(".icon-2");
const Icon3 = document.querySelector(".icon-3");
const Icon4 = document.querySelector(".icon-4");
const Icon5 = document.querySelector(".icon-5");
const Icon6 = document.querySelector(".icon-6");
const Icon7 = document.querySelector(".icon-7");
const Icon8 = document.querySelector(".icon-8");
let city = "Kakinada";
let Units = "metric";
async function weatherReport() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${Units}&key=ZN6T4DBAAHHTZ385R4KZV2D5G&contentType=json`
  );
  var data = await response.json();
  console.log(data);
  document.querySelector(".description").innerHTML =
    data.currentConditions.conditions;
  document.querySelector(".temp").innerHTML =
    data.currentConditions.temp + `${Units === "us" ? "°F" : "°C"}`;
  document.querySelector(".city").innerHTML = data.address;
  document.querySelector(".wind").innerHTML =
    data.currentConditions.windspeed + `${Units === "us" ? "mile/h" : "km/h"}`;
  document.querySelector(".humidity").innerHTML =
    data.currentConditions.humidity + "% ";
  document.querySelector(".visibility").innerHTML =
    data.currentConditions.visibility + `${Units === "us" ? "mile" : "km"}`;
  document.querySelector(".uv").innerHTML = data.currentConditions.uvindex;
  document.querySelector(".pressure").innerHTML =
    data.currentConditions.pressure + "hpa";
  if (data.currentConditions.precip === null) {
    document.querySelector(".precipitation").innerHTML = "0%";
  } else {
    document.querySelector(".precipitation").innerHTML =
      data.currentConditions.precip + "%";
  }
  if (data.currentConditions.conditions == "Overcast") {
    weatherIcon.src = "Gallery/cloudy.png";
  } else if (data.currentConditions.conditions == "Partially cloudy") {
    weatherIcon.src = "Gallery/sky.png";
  } else if (data.currentConditions.conditions == "Rain") {
    weatherIcon.src = "Gallery/Heavy_Rain.png";
  } else {
    weatherIcon.src = "Gallery/weather-icon-10.png";
  }

  document.querySelector(".am2").innerHTML =
    data.days[0].hours[2].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[2].conditions == "Overcast") {
    Icon1.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[2].conditions == "Partially cloudy") {
    Icon1.src = "Gallery/sky.png";
  } else if (data.days[0].hours[2].conditions == "Rain") {
    Icon1.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon1.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".am5").innerHTML =
    data.days[0].hours[5].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[5].conditions == "Overcast") {
    Icon2.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[5].conditions == "Partially cloudy") {
    Icon2.src = "Gallery/sky.png";
  } else if (data.days[0].hours[5].conditions == "Rain") {
    Icon2.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon2.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".am8").innerHTML =
    data.days[0].hours[8].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[8].conditions == "Overcast") {
    Icon3.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[8].conditions == "Partially cloudy") {
    Icon3.src = "Gallery/sky.png";
  } else if (data.days[0].hours[8].conditions == "Rain") {
    Icon3.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon3.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".am11").innerHTML =
    data.days[0].hours[11].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[11].conditions == "Overcast") {
    Icon4.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[11].conditions == "Partially cloudy") {
    Icon4.src = "Gallery/sky.png";
  } else if (data.days[0].hours[11].conditions == "Rain") {
    Icon4.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon4.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".pm2").innerHTML =
    data.days[0].hours[14].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[14].conditions == "Overcast") {
    Icon5.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[14].conditions == "Partially cloudy") {
    Icon5.src = "Gallery/sky.png";
  } else if (data.days[0].hours[14].conditions == "Rain") {
    Icon5.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon5.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".pm5").innerHTML =
    data.days[0].hours[17].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[17].conditions == "Overcast") {
    Icon6.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[17].conditions == "Partially cloudy") {
    Icon6.src = "Gallery/sky.png";
  } else if (data.days[0].hours[17].conditions == "Rain") {
    Icon6.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon6.src = "Gallery/weather-icon-10.png";
  }
  document.querySelector(".pm8").innerHTML =
    data.days[0].hours[20].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[20].conditions == "Overcast") {
    Icon7.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[20].conditions == "Partially cloudy") {
    Icon7.src = "Gallery/sky.png";
  } else if (data.days[0].hours[20].conditions == "Rain") {
    Icon7.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon7.src = "Gallery/weather-icon-10.png";
  }

  document.querySelector(".pm11").innerHTML =
    data.days[0].hours[23].temp + `${Units === "us" ? "°F" : "°C"}`;
  if (data.days[0].hours[23].conditions == "Overcast") {
    Icon8.src = "Gallery/cloudy.png";
  } else if (data.days[0].hours[23].conditions == "Partially cloudy") {
    Icon8.src = "Gallery/sky.png";
  } else if (data.days[0].hours[23].conditions == "Rain") {
    Icon8.src = "Gallery/Heavy_Rain.png";
  } else {
    Icon8.src = "Gallery/weather-icon-10.png";
  }
}
weatherReport();
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  city = searchBox.value;
  weatherReport();
  searchBox.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  var toggleSwitch = document.getElementById("toggle");

  toggleSwitch.addEventListener("change", (e) => {
    if (toggleSwitch.checked) {
      Units = "us";
      e.preventDefault();
      weatherReport();
    } else {
      Units = "metric";
      e.preventDefault();
      weatherReport();
    }
  });
});
