if (annyang) {
  const commands = {
    hello: () => {
      alert('Hello world!');
    },

    'Navigate to Dog page': () => {
      window.location.href = 'mydog.html';
    },

    'Navigate to Stocks page': () => {
      window.location.href = 'mystocks.html';
    },

    'Change the color to *color': (color) => {
      document.body.style.backgroundColor = color;
    },
  };

  function turnOn() {
    annyang.start();
  }

  function turnOff() {
    annyang.abort();
  }

  annyang.addCommands(commands);
}

function getQuote() {
  fetch('https://zenquotes.io/api/random')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      document.getElementById('random-quote').innerHTML += res[0].h;
    });
}

window.onload = getQuote;
