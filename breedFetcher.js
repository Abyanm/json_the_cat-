const request = require('request'); 
const args = process.argv.slice(2); 
let inputBreedType = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreedType}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    console.log(`😢 ${error}`); 
  } else if (data[0] === undefined) {
    console.log(`😢 Error: Breed not found`);
  } else {
    console.log(`😸 DESCRIPTION 😻`);
    console.log(`-`);
    console.log(`🐾😾${data[0].description}`);
  }
});