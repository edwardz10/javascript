function setFoo(fooInput) {
    this.foo = fooInput;
}

var foo = 5;
console.log('foo at this window level is set to: ' + foo);

var obj = {
    foo : 10
}

console.log('foo inside of obj is set to: ' + obj.foo);

setFoo(15);
console.log('foo at this window level is now set to: ' + foo);

obj.setFoo = setFoo;
obj.setFoo(20);

console.log('foo inside of obj is now set to: ' + obj.foo);

