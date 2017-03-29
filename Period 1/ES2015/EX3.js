// Gemt fives arrayet ned i en let fives
function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  let fives = this.fives
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      fives.push(v);
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);


// B 
// Arrow funktionen løser ikke This problemet
var counter = {
    count: 0,
    inc: count => count++
    }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one


