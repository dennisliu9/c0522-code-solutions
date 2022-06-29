let currentCount = 3;
const cdIntervalId = setInterval(
  () => {
    if (currentCount === 0) {
      clearInterval(cdIntervalId);
      console.log('Blast off!');
    } else {
      console.log(currentCount);
      currentCount--;
    }
  },
  1 * 1000
);
