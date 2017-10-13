var items = ['one', 'two', 'three'];
var itemsRef = items;

items = ['new', 'array'];

console.log(items !== itemsRef);

