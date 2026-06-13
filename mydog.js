let breedMap = {};

async function getData() {
  const dogAPI = `https://dog.ceo/api/breeds/image/random/10`;
  const dogData = await fetch(dogAPI).then((res) => res.json());
  return dogData;
}

async function getDogPictures() {
  const dogData = await getData();
  const dogImages = dogData.message;

  const dogSlider = document.getElementById('dog-slider');

  dogImages.forEach((imgUrl) => {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Random Doggo';
    dogSlider.appendChild(img);
  });

  simpleslider.getSlider({
    container: dogSlider,
    transitionTime: 1,
    delay: 3.5,
  });
}

function getDogBreeds() {
  const dogAPI = 'https://dogapi.dog/api/v2/breeds';
  return fetch(dogAPI)
    .then((res) => res.json())
    .then((data) => {
      const DogButtons = document.getElementById('dogBreedButtons');

      data.data.forEach((breed) => {
        const button = document.createElement('button');
        button.innerText = breed.attributes.name;
        button.setAttribute('class', 'dogBreedButtons');
        button.onclick = () => dogBreedInfo(breed);
        DogButtons.appendChild(button);

        breedMap[breed.attributes.name.toLowerCase()] = breed.id;
      });
    })
    .catch((error) => {
      console.error('Error fetching dog breeds:', error);
    });
}

function fetchBreedDetails(breedId) {
  const breedDetailsAPI = `https://dogapi.dog/api/v2/breeds/${breedId}`;
  fetch(breedDetailsAPI)
    .then((res) => res.json())
    .then((data) => {
      const breed = data.data;
      dogBreedInfo(breed);
    })
    .catch((error) => {
      console.error('Error getting breed info :c :', error);
    });
}

function dogBreedInfo(breed) {
  document.getElementById('dogBreedName').innerText = breed.attributes.name;
  document.getElementById('dogBreedDescription').innerText =
    breed.attributes.description;
  document.getElementById(
    'minLifeSpan'
  ).innerText = `Minimum Lifespan: ${breed.attributes.life.min} years`;
  document.getElementById(
    'maxLifeSpan'
  ).innerText = `Maximum Lifespan: ${breed.attributes.life.max} years`;
  document.getElementById('dogBreedInfo').classList.remove('hidden'); //reveals the hidden info

  const breedInfoContainer = document.getElementById('dogBreedInfo');
  breedInfoContainer.classList.add('visible');
}

function initializeAnnyang() {
  const commands = {
    'load dog breed *breedName': (breedName) => {
      const breedId = breedMap[breedName.toLowerCase()];
      if (breedId) {
        fetchBreedDetails(breedId);
      } else {
        console.error(`Breed "${breedName}" not found in breedMap.`);
      }
    },

    hello: () => {
      alert('Hello World!');
    },

    'change the color to *color': (color) => {
      document.body.style.backgroundColor = color;
    },
  };

  annyang.addCommands(commands);
  annyang.start();
}

window.onload = async function () {
  await getDogPictures();
  getDogBreeds();
  initializeAnnyang();
};
