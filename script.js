const API_KEY = process.env.WEATHER_API_KEY;
let API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

const permissionsRequired = {
    name: "geolocation",
};

function requestLocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const URL = `${API_URL}${position.coords.latitude},${position.coords.longitude}&aqi=no&lang=pt`;
            fetchWeatherData(URL);
            setInterval(() => {fetchWeatherData(URL);}, 1800000);
        },
        function(error) {
            if(error.code === error.PERMISSION_DENIED) {
                document.getElementById("weather").innerHTML = "<p>Permissão de localização negada! Por favor, permita, para ver os dados.</p>";
            }
            else {
                document.getElementById("weather").innerHTML = 
                    "<p>Não foi possível obter a localização. Por favor, tente novamente.</p>";
            }
        }
    )
}

function fetchWeatherData(URL) {
    fetch(URL)
        .then(response => {
            if(!response.ok) {
                console.log("Error with the API!");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            console.log(data);
        });
}

function displayWeather(data) {
    const temperature_c = data.current.temp_c;
    const temperature_f = data.current.temp_f;
    let region = data.location.name;
    if(region === "Ermezinde") {region = "Ermesinde";}
    const condition = data.current.condition.text;
    var weather = document.getElementById("weather");
    switch (data.current.condition.code) {
        case 1000:
            weather.innerHTML = `<pre>
  \\   /
   .-.       > ${region}
— (   ) —    > ${condition}
   \`-'       > ${temperature_c}ºC / ${temperature_f}ºF
  /   \\
</pre>`;
            break;
        case 1003:
            weather.innerHTML = `<pre>
  \\   /
   .-.       > ${region}   
— ( .---     > ${condition}
 .-(    ).   > ${temperature_c}ºC / ${temperature_f}ºF
(___.__)__)
</pre>`;
            break;
        case 1006:
            weather.innerHTML = `<pre>
    .--.    .--.     > ${region}
 .-(    ).-(    ).   > ${condition}
(___.__)___(___.__)  > ${temperature_c}ºC / ${temperature_f}ºF
</pre>`;
            break;
        case 1009:
            weather.innerHTML = `<pre>
    .--.    .--.
 .-(    ).-(    ).    > ${region}
(___.--.___(___.__)   > ${condition}
 .-(    ).            > ${temperature_c}ºC / ${temperature_f}ºF
(___.__)__)
</pre>`;
            break;
        case 1030:
            weather.innerHTML = `<pre>
 ~ ~ ~ ~ ~      > ${region}
~ ~ ~ ~ ~ ~     > ${condition}
 ~ ~ ~ ~ ~      > ${temperature_c}ºC / ${temperature_f}ºF
</pre>`;
            break;
        case 1063:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).     > ${region}
(___.__)__)    > ${condition}
 .  .   .      > ${temperature_c}ºC / ${temperature_f}ºF
'  '  '
</pre>`;
            break;
        case 1066:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).
(___.__)__)     > ${region}
 *   *          > ${condition}
* * *           > ${temperature_c}ºC / ${temperature_f}ºF
 *   *
</pre>`;
            break;
        case 1069:
        case 1072:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 / /  * *       > ${temperature_c}ºC / ${temperature_f}ºF
*  /  * /
</pre>`;
            break;
        case 1087:
            weather.innerHTML = `<pre>
    .--.    .--.      > ${region}
 .-(    ).-(    ).    > ${condition}
(___.__)___(___.__)   > ${temperature_c}ºC / ${temperature_f}ºF
</pre>`;
            break;
        case 1114:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
 *   *  ~>>  ~>    > ${temperature_c}ºC / ${temperature_f}ºF
* * *  ~>  ~>>
</pre>`;
            break;
        case 1117:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).       > ${region}
(___.__)__)      > ${condition}
 * * * * *       > ${temperature_c}ºC / ${temperature_f}ºF
* * * * * *
 * * * * *
</pre>`;
            break;
        case 1135:
        case 1147:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).       > ${region}
(___.__)__)      > ${condition}
 ~ ~ ~ ~ ~       > ${temperature_c}ºC / ${temperature_f}ºF
~ ~ ~ ~ ~ ~
 ~ ~ ~ ~ ~
</pre>`;
            break;
        case 1150:
        case 1153:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 .  .   .       > ${temperature_c}ºC / ${temperature_f}ºF
'  '  '
</pre>`;
            break;
        case 1168:
        case 1171:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 / /  * *       > ${temperature_c}ºC / ${temperature_f}ºF
*  /  * /
</pre>`;
            break;
        case 1180:
        case 1183:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 .  .   .       > ${temperature_c}ºC / ${temperature_f}ºF
'  '  '
</pre>`;
            break;
        case 1186:
        case 1189:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 /// /// /      > ${temperature_c}ºC / ${temperature_f}ºF
//// ////
</pre>`;
            break;
        case 1192:
        case 1195:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).       > ${region}
(___.__)__)      > ${condition}
 /// /// //      > ${temperature_c}ºC / ${temperature_f}ºF
//// //// /
</pre>`;
            break;
        case 1198:
        case 1201:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).       > ${region}
(___.__)__)      > ${condition}
 / /  * *        > ${temperature_c}ºC / ${temperature_f}ºF
*  /  * /
</pre>`;
            break;
        case 1204:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).       > ${region}
(___.__)__)      > ${condition}
 / /  * *        > ${temperature_c}ºC / ${temperature_f}ºF
*  /  * /
</pre>`;
            break;
        case 1207:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).
(___.__)__)      > ${region}
 / /  * *        > ${condition}
*  /  * /        > ${temperature_c}ºC / ${temperature_f}ºF
 .  .   .
'  '  '
</pre>`;
            break;
        case 1210:
        case 1213:
        case 1216:
        case 1219:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).      > ${region}
(___.__)__)     > ${condition}
 *   *          > ${temperature_c}ºC / ${temperature_f}ºF
* * * 
 *   *
</pre>`;
            break;
        case 1222:
        case 1225:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).
(___.__)__)       > ${region}
 * * * * *        > ${condition}
* * * * * *       > ${temperature_c}ºC / ${temperature_f}ºF
 * * * * *
</pre>`;
            break;
        case 1237:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).        > ${region}
(___.__)__)       > ${condition}
 o   o            > ${temperature_c}ºC / ${temperature_f}ºF
o o o 
 o   o
</pre>`;
            break;
        case 1240:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).        > ${region}
(___.__)__)       > ${condition}
 .  .   .         > ${temperature_c}ºC / ${temperature_f}ºF
'  '  '
</pre>`;
            break;
        case 1243:
        case 1246:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
 /// /// //        > ${region}
//// //// /
</pre>`;
            break;
        case 1249:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
 / /  * *          > ${temperature_c}ºC / ${temperature_f}ºF
*  /  * /
</pre>`;
            break;
        case 1252:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).
(___.__)__)       > ${region}
 / /  * *         > ${condition}
*  /  * /         > ${temperature_c}ºC / ${temperature_f}ºF
 .  .   .
'  '  '
</pre>`;
            break;
        case 1255:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).        > ${region}
(___.__)__)       > ${condition}
 *   *            > ${temperature_c}ºC / ${temperature_f}ºF
* * * 
 *   *
</pre>`;
            break;
        case 1258:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).
(___.__)__)        > ${region}
 * * * * *         > ${condition}
* * * * * *        > ${temperature_c}ºC / ${temperature_f}ºF
 * * * * *
</pre>`;
            break;
        case 1261:
        case 1264:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
 o   o             > ${temperature_c}ºC / ${temperature_f}ºF
o o o 
 o   o
</pre>`;
            break;
        case 1273:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
  /_/ . . .        > ${temperature_c}ºC / ${temperature_f}ºF
  /_/' ' '

</pre>`;
            break;
        case 1276:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
  /_/ /// /        > ${temperature_c}ºC / ${temperature_f}ºF
  /_/ ////

</pre>`;
            break;
        case 1279:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
  /_/ *   *        > ${temperature_c}ºC / ${temperature_f}ºF
  /_/* * *
</pre>`;
            break;
        case 1282:
            weather.innerHTML = `<pre>
    .--.
 .-(    ).         > ${region}
(___.__)__)        > ${condition}
 */_/ * * *        > ${temperature_c}ºC / ${temperature_f}ºF
* /_/* * * *
</pre>`;
            break;
        default:
            weather.innerHTML = `<pre>[No icon for this code]</pre>`;
  }

}

window.addEventListener('load', requestLocation);