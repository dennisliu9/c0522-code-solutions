const takeAChance = require('./take-a-chance');

const chancePromise = takeAChance('Dennis');
chancePromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });
