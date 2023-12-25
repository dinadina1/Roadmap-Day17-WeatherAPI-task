
    let container=document.createElement("div")
    container.setAttribute("class","container-fluid")
    container.innerHTML=`<h1 class="text-center head">RestCountries Weather</h1>`
    document.body.append(container)

    let div=document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML=`<div class="row row-gap-4 " id="cards"></div>`
    container.append(div)

    
    
const loadcountryAPI=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
    .catch(()=>{
        console.log("Error")
    })
}

const displayCountries=countries => {
    const countriesHTML=countries.map(country=>getCountry(country))
}

const getCountry=(country)=>{
    document.getElementById("cards").innerHTML+=`<div id="single-card" class="col-lg-4 col-sm-12 item ">
   
    <div class="card item-card card-block"> 
    <h4 class=" card-header text-center" id="country-name">${country.name.common}</h4>
    <div class="card-body">
    <img id="flag" class="card-img flag-image" src="${country.flags.png}" alt="Country">
    <p class="card-text" id="capital" style="font-weight:bold">Capital : ${country.capital}</p> 
    <p class="card-text" id="region" style="font-weight:bold">Region : ${country.region}</p>
    <p class="card-text" id="country-code" style="font-weight:bold">Country Code : ${country.cca2}</p>
    <button  class="btn btn-primary" onclick="myFunction('${country.capital}')" id="weather">Check for Weather</button>
    <p id="weatherinfo"></p>`
    
}
loadcountryAPI()

function myFunction(cap){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cap}&appid=5dbbbdb19a15927fa1338b574ea61c22`)
    .then((response)=>response.json())

    .then((response)=>{
    alert(`City : ${cap}\nWeather : ${response.weather[0].main}\nDescription : ${response.weather[0].description}\nTemperature : ${response.main.temp}°C\nWind Speed : ${response.wind.speed} mph`)
    })

    .catch(()=>{
        alert("Not found")
    })
    
}




