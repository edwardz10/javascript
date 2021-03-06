console.log('A basic log message');
console.debug('Debug level');
console.info('Info level');
console.warn('Warn level');
console.error('Error level');

var person = {
    name: 'John Connoly',
    age: 56,
    title: 'Teacher',
    toString: function() {
        return this.name + ' is a ' + this.age + ' -year-old ' + this.title + '.';
    }
};

console.log('A person: ');
console.dir(person);

console.log('Person object (implicit call to toString()): ' + person);
console.log('Person object as argument, similar to console.dir: ' + person);
