function formatAge(dateCreated) {
  const curDate = new Date();
  const timeInMS = curDate.getTime();

  const elapsed = timeInMS - dateCreated;
  let timi = '';
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  if (hours < 24) {
    if (hours === 1) {
      timi = 'klukkustund';
    } else {
      timi = 'klukkustundum';
    }
    return `Fyrir ${hours} ${timi} síðan`;
  } if (hours / 24 >= 1 && hours / 24 < 7) {
    if (Math.floor(hours / 24) === 1) {
      timi = 'degi';
    } else {
      timi = 'dögum';
    }
    return `Fyrir ${Math.floor(hours / 24)} ${timi} síðan`;
  } if (hours / 24 >= 7 && hours / 24 < 30) {
    if (Math.floor(hours / 24 / 7) === 1) {
      timi = 'viku';
    } else {
      timi = 'vikum';
    }
    return `Fyrir ${Math.floor(hours / 24 / 7)} ${timi} síðan`;
  } if (hours / 24 >= 30 && hours / 24 < 365) {
    if (Math.floor(hours / 24 / 30) === 1) {
      timi = 'mánuði';
    } else {
      timi = 'mánuðum';
    }
    return `Fyrir ${Math.floor(hours / 24 / 30)} ${timi} síðan`;
  }
  if (Math.floor(hours / 24 / 365) === 1) {
    timi = 'ári';
  } else {
    timi = 'árum';
  }
  return `Fyrir ${Math.floor(hours / 24 / 365)} ${timi} síðan`;
}

function formatDur(duration) {
  const minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

module.exports = {
  formatAge,
  formatDur,
};
