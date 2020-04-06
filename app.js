{
const weatherForm = document.querySelector('form[name = "form1"]')
const search = document.querySelector('input[name= "inp"]')
const dataput = document.querySelector('#inputdata')

//console.log(dataput)

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=a58f272460b7e69bc75cb0564f342621').then((response) => {
    response.json().then((data)=>{
        if (data.error) {
            
            console.log(data.error)
        } else {
            
            dataput.textContent=data.name + " is having " + data.weather[0].description
            console.log(data.name + " is having " + data.weather[0].description)
            
        }
    })
})
    

})

}
fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#mumbai1").html(data.name + " is having " + data.weather[0].description)
}) } )
 .catch((error)=>{ console.log(error)});

 fetch("https://api.openweathermap.org/data/2.5/weather?q=new york&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#newyork1").html(data.name + " is having " + data.weather[0].description)
}) } )
 .catch((error)=>{ console.log(error)});

 fetch("https://api.openweathermap.org/data/2.5/weather?q=melbourne&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#melbourne1").html(data.name + " is having " + data.weather[0].description)
}) } )
 .catch((error)=>{ console.log(error)});

 fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#london1").html(data.name + " is having " + data.weather[0].description)
}) } )

 .catch((error)=>{ console.log(error)});
 fetch("https://api.openweathermap.org/data/2.5/weather?q=shanghai&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#shanghai1").html(data.name + " is having " + data.weather[0].description)
}) } )

 .catch((error)=>{ console.log(error)});
 fetch("https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=a58f272460b7e69bc75cb0564f342621")
 .then((weather) => { weather.json().then(data => {
$("#singapore1").html(data.name + " is having " + data.weather[0].description)
}) } )
 .catch((error)=>{ console.log(error)});