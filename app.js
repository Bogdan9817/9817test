// let button = document.querySelector("button");
// let item = document.querySelector(".item");



// function animation(){
    
//     let position = 0;
//     let id = setInterval(frame, 20)
//     function frame() {
//         if(position === 250){
//             clearInterval(id)
//         } else{
//             position++;
//             item.style.left = position + "px "
//         }
//     } 
    
    
// }
// button.addEventListener("click",animation )
// let isMomHappy = false

// // promise
// let willNewPhone = new Promise(function(resolve, reject){
//     if (isMomHappy){
//         let phone = {
//             brand: 'Apple',
//             color: 'gold',
//         } 
//         resolve(phone)
//         } else{
//             reject("Mom is not happy")
//         }
         
//     }
// )
// let askMom = function() {
//     willNewPhone
//     .then(function(data){
//         console.log(data)
//     }).catch(function(error){
//         console.log(error)
//     })
// }
// parse - v format js 
// stringify - v format json
// let user = {
//     name: 'Ivan',
//     age: 28,
//     skills:{
//         html:4,
//         js: 5
//     }
// }
// console.log(JSON.parse(JSON.stringify(user)))


// let cloneUser = JSON.parse(JSON.stringify(user));
// cloneUser.skills.html = 5;
// console.log(cloneUser)
// console.log(user)
// console.log(cloneUser === user)



// fetch("https://learn.javascript.ru/article/promise-chaining/user.json")
// .then(respone => respone.json())
// .then(user => alert("Hello" + user.name))
// let button = document.querySelector('button')
// function myResponse(){
// fetch("https://api.github.com/users/Bogdan9817")
// .then(response => response.json())
// .then(user => {
//     let img = document.createElement("img")
//     let avatar = user.avatar_url;
//     img.setAttribute("src", avatar)
//     document.body.append(img)
// })
// }
// button.addEventListener("click", myResponse)

let button = document.querySelector("button");
let temperature = document.getElementById("#temp")
function myResponse(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(data => {
    
    let currentTemp = data.main.temp;
    document.getElementById('temp').textContent=currentTemp + "C"
    let currentPressure= data.main.pressure;
    document.getElementById('pressure').textContent="Тиск" + currentPressure;
    // let description = data.weather[3].description;
    // console.log(description)
    document.getElementById('description').textContent= description;
    let humidity = data.main.humidity;
    document.getElementById('humidity').textContent= humidity;
    let speed = data.wind.speed;
    document.getElementById('speed').textContent = "wind speed " + speed;
    // let img =  data.weather.icon ;
    // console.log(img)

    for(i in data.weather){
        x = data.weather[i].description;
        document.getElementById('description').textContent= x;
        
    }
    for(i in data.weather){
        j = data.weather[i].icon;
        let img = "http://openweathermap.org/img/w/" + j + ".png"
        document.querySelector("img").setAttribute("src", img)
    // document.querySelector("img").setAttribute("src", img);
    

}})
}


button.addEventListener("click", myResponse )
// let text = document.getElementById('temp').textContent
// document.getElementById('temp').textContent = "Hiii";