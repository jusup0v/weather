const apiKey = {
    key: '2e2546b4057f380b82447e55d4f7b52d'
}

const sendRequest = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.key}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data)
        })
        .catch(err =>{
            console.log(err);
            document.getElementsByTagName('h1')[1].innerText = 'нет такого города'
            document.getElementsByTagName('div')[2].style.display = 'none'
            document.getElementsByTagName('h2')[1].style.display = 'none'
            document.getElementsByTagName('h2')[0].style.display = 'none'
        })
}
const displayWeather = (data) => {
    console.log(data);
    document.getElementsByTagName('div')[2].style.display = 'block'
    document.getElementsByTagName('h2')[1].style.display = 'block'
    document.getElementsByTagName('h2')[0].style.display = 'block'
    const { temp } = data.main;
    // const { description, icon } = data.weather[0];
    const { speed } = data.wind;
    document.getElementsByTagName('h1')[1].innerText = `Погода в городу ${data.name}`
    document.getElementsByTagName('h2')[0].innerHTML = `${Math.round(temp - 273) + '&deg'}`
    document.getElementsByTagName('h2')[1].innerText = `Скорость ветра ${speed} км/с`
    document.getElementsByTagName('div')[2].innerHTML =
        `<img src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png">`
}
const searchChange = () => {
    sendRequest(document.getElementsByTagName('input')[0].value)
}
document.getElementsByTagName('div')[1].onclick = () => {
    searchChange()
}
sendRequest('')
let btn = document.getElementsByTagName('div')[1]
document.onkeydown = (e)=>{
    e.keyCode = 13
    btn.click()
}