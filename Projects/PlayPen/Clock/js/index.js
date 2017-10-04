(function() {
  var now = new Date();
  var delay =
      -now.getMilliseconds() -
      1000 * now.getSeconds() - 
      60000 * now.getMinutes() -
      3600000 * now.getHours();
  
  var elementsToAnimate = document.getElementsByClassName('animate');
  for (var i=0; i<elementsToAnimate.length; i++) {
    elementsToAnimate[i].style.animationDelay = delay + 'ms';
  }
}) ();