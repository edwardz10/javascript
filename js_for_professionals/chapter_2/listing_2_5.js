var foo = 'test';

if (true) {
    var foo = 'new test';
}

console.log(foo === 'new test');

function test() {
    var foo = 'old test';
}

test();

console.log(foo === 'new test');
