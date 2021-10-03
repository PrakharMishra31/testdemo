//1. Comparing JSON objects

var obj1 = { name: "person 1", age: 5 };
var obj2 = { age: 5, name: "person 1" };

console.log(
  Object.keys(obj1).sort().toString() === Object.keys(obj2).sort().toString()
);
//2. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

let req = new XMLHttpRequest();
let _result;
const imgContainer = document.querySelector("img");

req.open("GET", "https://restcountries.eu/rest/v2/all", true);

req.send();

req.onload = function () {
  _result = JSON.parse(req.response);
  _result.forEach((el) => {
    console.log(el.flag);
  });
  _result.forEach((el) => {
    console.log(
      `Country Name: ${el.name}, Region: ${el.region}, Sub-Region: ${el.subregion}, Population: ${el.population}`
    );
  });
};
