

//1.
let url = ("https://codeyourfuture.herokuapp.com/api/greetings");

var GenerateGreeting = () =>{
  const p = document.querySelector("#greeting-text");

}

const fetchURL = (url) =>{
  fetch(url)
  .then(res=>res.text())
  .then(data=>{
    GenerateGreeting(data);
    console.log(data)
  })
  .catch(err => console.error(err));
}
fetchURL(url);




//3.

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(people);

var i = 0; 
var oldestPersonIndex =0;
var maxAge =0;

while(i<3){
  var age = people[i].yearOfDeath - people[i].yearOfBirth;
  console.log(age);
  if(age >maxAge){
    maxAge = age;
    oldestPersonIndex= i;
  }
  i++;
}
console.log(people[oldestPersonIndex].name);