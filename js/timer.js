/*

// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
  }
}, 1000);
*/

const faqBtn = document.querySelectorAll(".btn")

faqBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    faqBtn.forEach(function (btn) {
      if (!btn.classList.contains("collapsed")) {
        btn.classList.add("expand")
      } else {
        btn.classList.remove("expand")

      }
    })
  })
})


let content = ["Version β 3.0 ", "IDE for your Code", "Now Online... ", "It's all Talk until the Code Runs"];

let part = 0;

let partIndex = 0;

let interval;

let element = document.querySelector("#text-typing");

// Implements typing effect
function Type() {
  let text = content[part].substring(0, partIndex + 1);
  element.innerHTML = text;
  partIndex++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === content[part]) {
    clearInterval(interval);
    setTimeout(function () {
      interval = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  let text = content[part].substring(0, partIndex - 1);
  element.innerHTML = text;
  partIndex--;

  // If sentence has been deleted then start to display the next sentence
  if (text === '') {
    clearInterval(interval);

    // If last sentence then display the first one, else move to the next
    if (part == (content.length - 1))
      part = 0;
    else
      part++;
    partIndex = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      interval = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
interval = setInterval(Type, 100);

//////////////////////////////////////////////////////////////////////////////////////////////
//scroll animations//

//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  var navi = document.getElementsByClassName("nav-link");
  // console.log(navi)


  //Home
  if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 400) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[0].classList.add("active");
  }


  //About
  if (document.documentElement.scrollTop > 400 && document.documentElement.scrollTop <= 1700) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[1].classList.add("active");
  }

  //Schdule
  if (document.documentElement.scrollTop > 1700 && document.documentElement.scrollTop <= 2600) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[2].classList.add("active");
  }
  //prizes
  if (document.documentElement.scrollTop > 2900 && document.documentElement.scrollTop <= 3800) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[3].classList.add("active");
  }

  //gallery
  if (document.documentElement.scrollTop > 3800 && document.documentElement.scrollTop <= 5600) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[4].classList.add("active");
  }
  //Sponsor
  if (document.documentElement.scrollTop > 5800 && document.documentElement.scrollTop <= 9600) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[5].classList.add("active");
  }

  //FAQS
  if (document.documentElement.scrollTop > 9600 && document.documentElement.scrollTop <= 10000) {
    for (var i = 0; i < navi.length; i++) {
      if (navi[i].classList.contains("active"))
        navi[i].classList.remove("active");
    }
    navi[6].classList.add("active");
  }
  // if (document.documentElement.scrollTop > 4300 && document.documentElement.scrollTop <= 4900) {
  //   for (var i = 0; i < navi.length; i++) {
  //     if (navi[i].classList.contains("active"))
  //       navi[i].classList.remove("active");
  //   }
  //   navi[7].classList.add("active");
  // }
  // if (document.documentElement.scrollTop > 4900 && document.documentElement.scrollTop <= 5100) {
  //   for (var i = 0; i < navi.length; i++) {
  //     if (navi[i].classList.contains("active"))
  //       navi[i].classList.remove("active");
  //   }
  //   navi[8].classList.add("active");
  // }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
