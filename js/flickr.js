const KEY = '54156eed62c1bb8f51a3faae90d2a174';
let searchText = 'jaws';

// let url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=1&page=1`;


//Pussla ihop bild-urlen
function getImageUrl(photoObject) {

  let photo = photoObject;
  let size = imageSize.value;

  let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

  displayImg(imgUrl);
}

//För att visa bilden
function displayImg(url) {

  let img = document.createElement('img');
  img.src = url;

  let div = document.createElement('div');
  div.className='carousel-item';
  div.appendChild(img);
  document.querySelector('.carousel-inner').appendChild(div);

}

// Eventlistner:
const btn = document.getElementById('submit');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const removeIt = document.querySelectorAll('.carousel-item');
  for (let i = 0; i < removeIt.length; i++) {
    const el = removeIt[i];
    el.remove();
  }

  anime({
    targets: btn,
    rotate: '1turn',
    easing: 'linear',
    direction: 'alternate',
    duration: 300,
    color: `hsl(360, 50%, 50%)`,
  })

  anime({
    targets: "#message",
    translateY: '4hw',
    loop: true,
    direction: 'alternate',
    duration: 2000,
    color: `hsl(1, 50%, 50%)`,
    fontSize: '40px',
  })
  setMessage("...Söker efter bilder...");

  const logEl = document.querySelector('.battery-log');



  const imageTxtInput = document.getElementById('imageText');
  const imageSize = document.getElementById('imageSize');
  const imageNumber = document.getElementById('imageNmbr');

  url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${imageTxtInput.value}&format=json&nojsoncallback=1&per_page=${imageNumber.value}&page=1`;
  console.log(imageTxtInput.value)

  fetch(url)
    .then(
      function (response) {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        else {
          throw 'Något gick fel.. Testa igen!';
        }
      }
    ).then(
      function (data) {

        const h2 = document.querySelector("#message");
        h2.style.display = "none";


        for (let i = 0; i < imageNumber.value; i++) {
          getImageUrl(data.photos.photo[i]);
        }
        document.querySelector('.carousel-item').classList.add('active')
        
      }
    ).catch(
      function (error) {
        alert('Hej kompis, Du fick ett error i texten, testa skriv någonting annat som sökord. Eller så finns det inte så många bilder av det du söker... kram!')
        console.log(error);
        setMessage("Det fungerade inte denna gången. Testa igen nu och om ett tag! :)");
      }
    );
  function setMessage(message) {
    const h2 = document.querySelector("#message");
    h2.style.display = "block";
    h2.innerText = message;
  }
})

anime({
  targets: ".toppen",
  loop: true,
  duration: 1000,
  color: `hsl(360, 50%, 50%)`,
})

anime({
  targets: '.toTop',
  translateX: 50,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

$("#gone").mouseenter(function(){
  $(this).hide();
});
