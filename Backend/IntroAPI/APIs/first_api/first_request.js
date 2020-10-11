const request = require("request");
const rp = require("request-promise");

request("https://jsonplaceholder.typicode.com/users/1", function (
  error,
  response,
  body
) {
  // eval(require("locus"));
  if (!error && response.statusCode == 200) {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lived in ${parsedData.address.city}`);
  }
});

rp("https://jsonplaceholder.typicode.com/users/2")
  .then((body) => {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
