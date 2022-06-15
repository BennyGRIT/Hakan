let theJokeButton = document.getElementById('theJokeButton');
let content = document.getElementById('content');

let jokeArray = [
    "Håkan är så gammal så hans första skinnjacka var gjord av mammut!",
    'Fråga: "Håkan, du som är så gammal, hur känner du dig?" Håkan svarar: "Som en nyfödd baby. Jag har inget hår, inga tänder och jag tror att jag precis pinkade på mig"',
    "Håkan är så gammal att han satt bakom Jesus i tredje klass",
    "Håkan är så gammal att när han gick i skolan undervisade de inte i historia.",
    "Håkan är så gammal att han är döv sedan Bing Bang",
    "Håkan är så gammal så att hans drömmar är repriser",
    "Håkan var med och vallade skidorna åt Gustav Vasa",
    "Håkan levde sina första tio år i vatten",
    "Håkans ålder uppskattas med hjälp av Kol-14 metoden",
    "Alla barnen snöt sig förutom Håkan, för han åt upp kråkan",
    "Håkan är så gammal så att han ska snart gå i pension för tredje gången",
    'När Håkan är ute och går med sin faster så säger alla "Kolla! Där kommer världens äldsta människa... och hennes pappa',
    "Håkan är så kort att hans fötter syns på körkortet",
    '"Vet du varför Håkan skrattar så mycket när han spelar fotboll?" - Jo, för gräset kittlar honom på stjärten'
]

console.log(jokeArray[3])

theJokeButton.onclick = function (event) {
    event.preventDefault();
    content.textContent = ""
    const randomNumber = Math.floor(Math.random() * 14);
    console.log(jokeArray[randomNumber])

let thisP = document.createElement('p');
content.append(thisP);
thisP.setAttribute('id', 'pjoke')
thisP.textContent += randomNumber+1 + ". " + jokeArray[randomNumber]
}