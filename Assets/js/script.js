var timeDisplayEl = document.getElementById("#time-display");

function timeDisplayEl() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }