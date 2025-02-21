const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid=your_api_key_here", true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        
        const res = JSON.parse(xhr.responseText);
        console.log(res); 
    } else {
        console.log("Error: " + xhr.status);  
    }
};
xhr.send()