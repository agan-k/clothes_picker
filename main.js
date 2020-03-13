const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const api_key = '7ff65e290b76707972db913553d8d7da';

const button = document.querySelector('button');
const cityZipInput = document.querySelector('input');
const weatherCondition = document.querySelector('.weather');

// ====== here all the clothing combinations =====
const dressOne = document.querySelector('.one');
const dressTwo = document.querySelector('.two');
const dressThree = document.querySelector('.three');
const dressFour = document.querySelector('.four');
const dressFive = document.querySelector('.five');
const dressSix = document.querySelector('.six');
const dressSeven = document.querySelector('.seven');
const dressEight = document.querySelector('.eight')
const dressNine = document.querySelector('.nine')
const dressTen = document.querySelector('.ten');
const dressEleven = document.querySelector('.eleven');
const dressTwelve = document.querySelector('.twelve');
const dressThirteen = document.querySelector('.thirteen');
const dressFourteen = document.querySelector('.fourteen');
const dressFifteen = document.querySelector('.fifteen');
const dressSixteen = document.querySelector('.sixteen');
const dressSeventeen = document.querySelector('.seventeen');
const dressEighteen = document.querySelector('.eighteen');
const dressNineteen = document.querySelector('.nineteen');
const dressTwenty = document.querySelector('.twenty');

// ================================================
// ================ landing page background =======
const background = document.querySelector('.background');
// ================================================

button.addEventListener('click', async () => {
        const cityZip = cityZipInput.value;
        const response = await axios.get(`${weatherUrl}${cityZip}&units=imperial&appid=${api_key}`);
        cityZipInput.classList.add('hide');
        button.classList.add('hide');
        background.classList.add('hide');

        weatherCondition.innerHTML = `
        <h3>${response.data.name}<h3>
        <p><em>temperature:</em> <strong>${response.data.main.temp}</strong>°F  <em>feels like:</em> <strong>${response.data.main.feels_like}</strong>°F</p>
        <p><em>wind:</em>   <strong>${response.data.wind.speed}</strong>mph
        <p><strong>${response.data.weather[0].main}</strong></p>
        `
        let temp = response.data.main.temp;
        let main = response.data.weather[0].main;
        console.log(response);

        if (temp < 30 && main == 'Snow') {
                weatherCondition.classList.add('show');
                dressOne.classList.add('show');
        } else if (temp < 30 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressTwo.classList.add('show');
        } else if (temp < 30 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressTwo.classList.add('show');
        } else if (temp < 30 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressTwo.classList.add('show');
        } else if (temp < 30 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressThree.classList.add('show');
        } else if (temp < 30 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressThree.classList.add('show');
        } else if (temp < 30 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressThree.classList.add('show');

        } else if (temp < 40 && main == 'Snow') {
                weatherCondition.classList.add('show');
                dressFour.classList.add('show');
        } else if (temp < 40 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressFive.classList.add('show');
        } else if (temp < 40 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressFive.classList.add('show');
        } else if (temp < 40 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressFive.classList.add('show');
        } else if (temp < 40 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressSix.classList.add('show');
        } else if (temp < 40 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressSix.classList.add('show');
        } else if (temp < 40 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressSix.classList.add('show');

        } else if (temp < 50 && main == 'Snow') {
                weatherCondition.classList.add('show');
                dressSeven.classList.add('show');
        } else if (temp < 50 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressEight.classList.add('show');
        } else if (temp < 50 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressEight.classList.add('show');
        } else if (temp < 50 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressEight.classList.add('show');
        } else if (temp < 50 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressNine.classList.add('show');
        } else if (temp < 50 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressNine.classList.add('show');
        } else if (temp < 50 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressNine.classList.add('show');

        } else if (temp < 60 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressTen.classList.add('show');
        } else if (temp < 60 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressTen.classList.add('show');
        } else if (temp < 60 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressEleven.classList.add('show');
        } else if (temp < 60 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressTwelve.classList.add('show');
        } else if (temp < 60 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressTwelve.classList.add('show');
        } else if (temp < 60 && main.value == 'Clear') {
                weatherCondition.classList.add('show');
                dressTwelve.classList.add('show');

        } else if (temp < 70 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressThirteen.classList.add('show');
        } else if (temp < 70 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressThirteen.classList.add('show');
        } else if (temp < 70 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 70 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 70 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 70 && main.value == 'Clear') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');

        } else if (temp < 80 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressThirteen.classList.add('show');
        } else if (temp < 80 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressThirteen.classList.add('show');
        } else if (temp < 80 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 80 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 80 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');
        } else if (temp < 80 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressFourteen.classList.add('show');

        } else if (temp < 90 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressFifteen.classList.add('show');
        } else if (temp < 90 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressSixteen.classList.add('show');
        } else if (temp < 90 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressFifteen.classList.add('show');
        } else if (temp < 90 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressSixteen.classList.add('show');
        } else if (temp < 90 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressSeventeen.classList.add('show');
        } else if (temp < 90 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressSeventeen.classList.add('show');

        } else if (temp > 90 && main == 'Rain') {
                weatherCondition.classList.add('show');
                dressEighteen.classList.add('show');
        } else if (temp > 90 && main == 'Thunderstorm') {
                weatherCondition.classList.add('show');
                dressEighteen.classList.add('show');
        } else if (temp > 90 && main == 'Drizzle') {
                weatherCondition.classList.add('show');
                dressEighteen.classList.add('show');
        } else if (temp > 90 && main == 'Clouds') {
                weatherCondition.classList.add('show');
                dressNineteen.classList.add('show');
        } else if (temp > 90 && main == 'Fog') {
                weatherCondition.classList.add('show');
                dressNineteen.classList.add('show');
        } else if (temp > 90 && main == 'Clear') {
                weatherCondition.classList.add('show');
                dressTwenty.classList.add('show');
        }





        //debugger;
});
