const request = require('request'); 
const args = process.argv.slice(2); 
let inputBreedType = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreedType}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    console.log(`π’ ${error}`); 
  } else if (data[0] === undefined) {
    console.log(`π’ Error: Breed not found`);
  } else {
    console.log(`πΈ DESCRIPTION π»`);
    console.log(`-`);
    console.log(`πΎπΎ${data[0].description}`);
  }
});