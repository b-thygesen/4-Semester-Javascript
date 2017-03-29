// Exercise 1
let names = ["kurt", "Ib", "Lars", "Ida"];

let rows = names.map(function(name){
    return "<td>"+name + "</td>"
});

let rowsStr = rows.join(" ")
//console.log(rowsStr);

let table = `<table><tbody> ${rowsStr} </tbody></table>`
//console.log(rows);

// 1.2

let rows2 = names.map(function(name){
  return name.toUpperCase();
});