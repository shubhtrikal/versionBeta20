function timer()
{
    // Set the date we're counting down to
var countDownDate = new Date("Sep 24, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
	document.getElementById("days").innerHTML=days;
	document.getElementById("hours").innerHTML=hours;
	document.getElementById("minutes").innerHTML=minutes;
	document.getElementById("seconds").innerHTML=seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
  }
}, 1000);
}
function chang_sign()
	{
		var x=document.getElementsByClassName("collapsing");
		var y= x[0].parentNode.getElementsByClassName("btn");
		let z= y[0].getElementsByClassName("sign")[0];
		if(z.innerHTML=='+')
			z.innerHTML="-";
		else
		{
			let w= y[0].getElementsByClassName("sign")[0];
			if(w.innerHTML=='-')
			w.innerHTML="+";
		}				
		
	}