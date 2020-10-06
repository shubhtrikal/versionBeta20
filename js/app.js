
// DevFolio button 
document.addEventListener('DOMContentLoaded', function () {
  let devfolioOptions = {
    buttonSelector: '#devfolio-apply-now',
    key: 'versionbeta',
  }

  let script = document.createElement('script');
  script.src = "https://apply.devfolio.co";
  document.head.append(script);

  script.onload = function () {
    new Devfolio(devfolioOptions);
  }

  script.onerror = function () {
    document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
      window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
    });
  }
});

// Card flip Prizes Section
// Event listner in click on card
var card1 = document.getElementById('p1');
card1.addEventListener('click', function () {
  card1.classList.toggle('is-flipped');
});


var card2 = document.getElementById('p2');
card2.addEventListener('click', function () {
  card2.classList.toggle('is-flipped');
});

var card3 = document.getElementById('p3');
card3.addEventListener('click', function () {
  card3.classList.toggle('is-flipped');
});
