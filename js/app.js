
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

// Card animate Prizes Section
// event on hover class 'animate' will add in classList
var card1 = document.getElementById('p1');
var card2 = document.getElementById('p2');
var card3 = document.getElementById('p3');

card1.addEventListener('mouseenter',function(){
    card1.classList.toggle('animate');
});

card1.addEventListener('mouseleave',function(){
  card1.classList.toggle('animate');
});


card2.addEventListener('mouseenter',function(){
  card2.classList.toggle('animate');
});

card2.addEventListener('mouseleave',function(){
card2.classList.toggle('animate');
});


card3.addEventListener('mouseenter',function(){
  card3.classList.toggle('animate');
});

card3.addEventListener('mouseleave',function(){
card3.classList.toggle('animate');
});