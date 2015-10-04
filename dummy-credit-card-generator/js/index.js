function toggleClasses() {
  
  $('.front').toggleClass('animate');
  $('.back').toggleClass('animate');
}

setTimeout(function() {
  
  toggleClasses();
  
  setInterval(function() {

    toggleClasses();
  }, 3400/2);
}, 3400/4);