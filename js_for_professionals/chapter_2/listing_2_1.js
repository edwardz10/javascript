var obj = {};
var refToObj = obj;

obj.oneProperty = true;

console.log(obj.oneProperty === refToObj.oneProperty);

refToObj.anotherProperty = 1;

console.log(obj.anotherProperty === refToObj.anotherProperty);

