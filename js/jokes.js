let theJokeButton = document.getElementById('theJokeButton');
let content = document.getElementById('content');

// theJokeButton.addEventListener = function (event) {
//     event.preventDefault();
//     content.textContent = ""
//     const randomNumber = Math.floor(Math.random() * 14);
//     console.log(randomNumber)

//     showJokes().then(response => {
//         let thisP = document.createElement('p');
//         content.append(thisP);
//         thisP.setAttribute('id', 'pjoke')
//         thisP.textContent += randomNumber+1 + ". " + response[randomNumber].theJoke + ' '
//     });
// };


theJokeButton.addEventListener('click', function(event){
    event.preventDefault();
    content.textContent = ""
    const randomNumber = Math.floor(Math.random() * 14);
    console.log(randomNumber)

    showJokes().then(response => {
        let thisP = document.createElement('p');
        content.append(thisP);
        thisP.setAttribute('id', 'pjoke')
        thisP.textContent += randomNumber+1 + ". " + response[randomNumber].theJoke + ' '
    });
});





async function showJokes() {
    let response = await fetch('http://localhost:4559/showJokes');
    let data = await response.json();
    return data
};

