let theJokeButton = document.getElementById('theJokeButton');
let content = document.getElementById('content');

theJokeButton.onclick = function (event) {
    event.preventDefault();
    content.textContent = ""
    const randomNumber = Math.floor(Math.random()*12);
    console.log(randomNumber)

    showJokes().then(response => {
        let thisP = document.createElement('p');
        content.append(thisP);
        thisP.setAttribute('id', 'pjoke')
        thisP.textContent += response[randomNumber].theJoke + ' '
    });
};
async function showJokes() {
    let response = await fetch('http://localhost:4558/showJokes');
    let data = await response.json();
    return data
};

