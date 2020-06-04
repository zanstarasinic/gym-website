window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 10px";
    document.getElementById("navbar").style.padding = "10px 10px";
  } else {
    document.getElementById("header").style.padding = "30px 10px";
    document.getElementById("navbar").style.padding = "10px 10px";
  }
} 