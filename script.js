$(function() {
  console.log("Running Touch Logger");
  $(document).on('click', function() {
    console.log("a click");
  });

  $(document).on('touchstart', function() {
    console.log("a touch");
  });

  var timerClick = 0;
  var timerTouch = 0;

  $(document).on('click', function() {
      timerClick = Date.now();
      var delta = timerTouch - timerClick;
      delta = delta > -5000 ? delta : "No Touch Event"
      logEvent('Clicked: ' + timerClick + ' Delta: ' + delta)
  });

  $(document).on('touchstart', function() {
      timerTouch = Date.now();
      logEvent('Touched: ' + timerTouch);
  });

  function logEvent(message) {
    console.log(message)
  }
});