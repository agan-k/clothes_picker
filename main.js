const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const api_key = '7ff65e290b76707972db913553d8d7da';

const button = document.querySelector('button');
const cityZipInput = document.querySelector('input');
const weatherCondition = document.querySelector('section');

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
// ================================================
button.addEventListener('click', async () => {
        const cityZip = cityZipInput.value;
        const response = await axios.get(`${weatherUrl}${cityZip}&units=imperial&appid=${api_key}`);
        console.log(response);
        //debugger;
        weatherCondition.innerHTML = `
        <h3>${response.data.name}<h3>
        <p>Temperature: ${response.data.main.temp} Feels like: ${response.data.main.feels_like}</p>
        <p>Wind:  ${response.data.wind.speed}mph
        <p>${response.data.weather[0].main} </p
        <p>'('${response.data.weather[0].description}')'</p>
        `
        let temp = response.data.main.temp;
        let main = response.data.weather[0].main;
        let Rain = response.data.weather[0].main.value;
        let Snow = response.data.weather[0].main.value;
        let Clear = response.data.weather[0].main.value;

        if (temp < 30 && main == Snow) {
                dressOne.classList.add('show');
        } else if (temp < 30 && main == Rain) {
                dressTwo.classList.add('show');
        } else if (temp < 30 && main == Clear) {
                dressThree.classList.add('show');

        } else if (temp < 50 && main == Snow) {
                dressFour.classList.add('show');
        } else if (temp < 50 && main == Rain) {
                dressFive.classList.add('show');
        } else if (temp < 50 && main == Clear) {
                dressSix.classList.add('show');

        } else if (temp < 70 && main == Rain) {
                dressSeven.classList.add('show');
        } else if (temp < 70 && main.value == Clear) {
                dressEight.classList.add('show');

        } else if (temp < 80 && main == Rain) {
                dressNine.classList.add('show');
        } else if (temp < 80 && main == Clear) {
                dressTen.classList.add('show');

        } else if (temp > 90 && main == Rain) {
                dressEleven.classList.add('show');
        } else if (temp > 90 && main == Clear) {
                dressTwelve.classList.add('show');
        }
});
