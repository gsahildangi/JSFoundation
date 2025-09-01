document.addEventListener('DOMContentLoaded' , () => {

const cityInput = document.getElementById('city-input');
const getWheatherBtn = document.getElementById('get-weather-btn');
const weatherInfo = document.getElementById('wheather-info');
const cityNameDisplay = document.getElementById('city-name');
const tempDisplay = document.getElementById('temperature');
const humidityDisplay = document.getElementById('humidity')
const descriptionDisplay = document.getElementById('description');
const errorMessage = document.getElementById('error-msg');

 const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"  // later in env_variable

getWheatherBtn.addEventListener('click' , async () => {
   
    const cityName = cityInput.value.trim()
    if(!cityName) return;

    try {
         
      const wheatherData  = await fetchWheatherData(cityName);
       dispayWheatherData(wheatherData);


    } catch (error) {
        console.log(error);
        
    }


})

async function fetchWheatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);

    // console.log(typeof response); // this is to know what kind of data is comming. - it is object type
    console.log("Response" , response);

    if (!response.ok){
        showError();
     }   
      const data =  await response.json()
      return data;
 }

function dispayWheatherData(data){
    console.log(data);
    // console.log(name);
    // console.log(main.humidity);                                                                 
    // console.log(weather[0].description);
    
    const {main ,name, weather} = data;
     const celsiusTemp = (main.temp - 273.15).toFixed(2); // converting the kelvin value to celsius

    //unlock the display for temperature in below two statements.
     errorMessage.classList.add('hidden');
     weatherInfo.classList.remove('hidden')
    
    cityNameDisplay.textContent = name;
    tempDisplay.textContent = `Temperature :${celsiusTemp} celsius`;
    humidityDisplay.textContent = `Humidity :${main.humidity}`
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    
     

}

function showError(){
    errorMessage.classList.remove('hidden');
    weatherInfo.classList.add('hidden')
}

})