function sleep(seconds = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
}

function randomInt(max, type = "int") {
  if (type === "int") {
    return Math.floor(Math.random() * max);
  } else {
    return Math.random() * max;
  }
}
