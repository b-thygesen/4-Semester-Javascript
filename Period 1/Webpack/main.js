require("./main.css");

import _ from 'lodash';

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}
const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

function getTable(data,sport){
  const filtered = sport ? data.filter(p => p.favoriteSport === sport) : data;
  const headers = _.keys(filtered[0]);
  const headerHTML = headers.map(h=>`<th>${_.startCase(h)}</th>`).join(" ");
  const bodyHTML = filtered.map((p)=> `<tr>
  <td>${p.firstName}</td>
  <td>${p.lastName}</td>
  <td>${p.favoriteSport}</td>
  </tr>`).join(" ");
  return  `<table class="table">
  <thead><tr>${headerHTML}</tr></thead>
  <tbody>${bodyHTML}</tbody>
  </table>`
}

const table = getTable(persons);
document.getElementById('content').innerHTML = table;

/*
var propertyNames = _.keys(persons[0]);

let personsData = persons.map(function(personData){
    console.log(`${personData.firstName}`);
})

let rows = propertyNames.map(function(properties){
    console.log(_.startCase(`${properties}`))
    return `<th>${properties}</th>`
})

let objectRows 

const table = makeTable(persons);

function makeTable(persons) {
    tableString = "<table>\n<tr>"
}
*/
