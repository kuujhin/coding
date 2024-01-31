const clockTitle = document.querySelector(".js-clock");
function getClock() {
  const today = new Date();
  const christmas = new Date("December 25, 2024 00:00:00");

  let diffMSec = christmas - today;
  const diffDate = Math.floor(diffMSec / (24 * 60 * 60 * 1000));

  diffMSec = diffMSec - diffDate * (24 * 60 * 60 * 1000);
  const diffHour = Math.floor(diffMSec / (60 * 60 * 1000));

  diffMSec = diffMSec - diffHour * (60 * 60 * 1000);
  const diffMin = Math.floor(diffMSec / (60 * 1000));

  diffMSec = diffMSec - diffMin * (60 * 1000);
  const diffSec = Math.floor(diffMSec / 1000);

  clockTitle.innerText = `${diffDate}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getClock();
setInterval(getClock, 1000);
