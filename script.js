const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a318a1f93fmsh9be8c39503b0a47p16dd60jsn4e4449129620',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let submit=document.getElementById("submit");
let inbox=document.getElementById("inbox");
let humid=document.getElementById("humid");
let temperatureval=document.getElementById("temperatureval");
let cityname=document.getElementById("cityname");
let windspeed=document.getElementById("windspeed");
let winddegree=document.getElementById("winddegree");
let cloudprct=document.getElementById("cloudprct");
let maxtemp=document.getElementById("maxtemp");
let mintemp=document.getElementById("mintemp");
let sunrise=document.getElementById("sunrise");
let sunset=document.getElementById("sunset");
let btn=document.getElementById("btn");


const getWeather=(city)=>{
	// fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mathura", options)
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options)
		.then(response => response.json())
		.then(response =>{ console.log(response);
			cityname.innerHTML=city;
			humid.innerHTML=response.humidity;
			temperatureval.innerText=response.temp;
			windspeed.innerText=response.wind_speed;
			winddegree.innerText=response.wind_degrees;
			cloudprct.innerText=response.cloud_pct;
			maxtemp.innerText=response.max_temp;
			mintemp.innerText=response.min_temp;
			sunrise.innerText=response.sunrise;
			sunset.innerText=response.sunset;
		})
		.catch(err => console.error(err));
}
btn.addEventListener("click",(e)=>{
	console.log("pressed");
	getWeather(inbox.value);
})





fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
let deltemp=document.getElementById("deltemp");
let mumbtemp=document.getElementById("mumbtemp");
let bangtemp=document.getElementById("bangtemp");
let lucktemp=document.getElementById("lucktemp");
let koltemp=document.getElementById("koltemp");
let partemp=document.getElementById("partemp");

let delmax=document.getElementById("delmax");
let mumbmax=document.getElementById("mumbmax");
let bangmax=document.getElementById("bangmax");
let luckmax=document.getElementById("luckmax");
let kolmax=document.getElementById("kolmax");
let parmax=document.getElementById("parmax");

let delmin=document.getElementById("delmin");
let mumbmin=document.getElementById("mumbmin");
let bangmin=document.getElementById("bangmin");
let luckmin=document.getElementById("luckmin");
let kolmin=document.getElementById("kolmin");
let parmin=document.getElementById("parmin");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response =>{
		deltemp.innerText=response.temp;
		delmax.innerText=response.humidity;
		delmin.innerText=response.wind_speed;
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response =>{
		mumbtemp.innerText=response.temp;
		mumbmax.innerText=response.humidity;
		mumbmin.innerText=response.wind_speed;
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response =>{
		bangtemp.innerText=response.temp;
		bangmax.innerText=response.humidity;
		bangmin.innerText=response.wind_speed;
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response =>{
		lucktemp.innerText=response.temp;
		luckmax.innerText=response.humidity;
		luckmin.innerText=response.wind_speed;
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response =>{
		koltemp.innerText=response.temp;
		kolmax.innerText=response.humidity;
		kolmin.innerText=response.wind_speed;
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
	.then(response => response.json())
	.then(response =>{
		partemp.innerText=response.temp;
		parmax.innerText=response.humidity;
		parmin.innerText=response.wind_speed;
	})