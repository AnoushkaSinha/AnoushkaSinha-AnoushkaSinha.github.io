

var apiCall = (e) =>{

    if (e.keyCode== 13){
        let city = document.getElementById("inpK").value
        console.log(city);
        console.log(e.keyCode);
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a01d12c8d819fedfe0d890cb97545af6` ;
        fetch(apiUrl)
        .then(response => response.json())
        .then(data =>printFn(data));
    }
}

const printFn = (data) =>{

    console.log(data.weather[0].main)
    console.log(data.weather[0].description)
    let tmp = data.main.temp_max - 273.15
    console.log(tmp.toFixed(2))
    document.getElementById("tmp").innerText = tmp.toFixed(0)+"°C"
    document.getElementById("hmd").innerText = data.main.humidity+"%"
    document.getElementById("cnc").innerText = data.weather[0].main

}