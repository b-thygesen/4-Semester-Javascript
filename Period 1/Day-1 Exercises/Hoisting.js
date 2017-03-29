IsThisHoisted();
addnums();

function IsThisHoisted() {
    console.log("Yes!");
}

function addnums() {
    console.log(a);
    a = 7;
    console.log(a);
}

var a;