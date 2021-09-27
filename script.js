console.log("Hello");

let ListA = ['A','B','C'];
let ListB = ['D','E','F'];
let ListC = ['G','H','I'];

const selectListItem  = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

console.log(selectListItem(ListA));
console.log(selectListItem(ListB));
console.log(selectListItem(ListC));