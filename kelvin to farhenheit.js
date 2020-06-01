let kelvinTemp = 301;
let celsiusTemp = kelvinTemp - 273.15;
let fahrenheitTemp = celsiusTemp * (9/5) + 32;
//document.write(fahrenheitTemp);
let temperature = Math.floor(fahrenheitTemp);
document.write(`The temperature is ${temperature} degrees Fahrenheit.`);

