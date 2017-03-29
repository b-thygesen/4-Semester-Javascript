Array.prototype.makeUpper = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var names = ["per", "jens", "hans", "lars"];
names.makeUpper();


var names2 = ["persen", "jensen", "hansen", "larsen"];
names2.makeUpper();

console.log(names);
console.log(names2);