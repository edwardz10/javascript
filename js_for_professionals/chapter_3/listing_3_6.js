var Person = {
    firstName: 'John',
    lastName: 'Connoly',
    birthDate: new Date('1964-09-05'),
    gender: 'male',

    getAge: function() {
        var today = new Date();
        var diff = today.getTime() - this.birthDate.getTime();
        var year = 1000*60*60*24*365.25;
        return Math.floor(diff / year);
    },

    toString: function() {
        return this.firstName + ' ' + this.lastName + ' is a '
            + this.getAge() + ' year-old ' + this.gender;
    },

    extend: function(config) {
        var tmp = Object.create(this);

        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                tmp[key] = config[key];
            }
        }

        return tmp;
    }
};

var Teacher = Person.extend({
    job: 'teacher',
    subject: 'English Literature',
    yearsExp: 5,
    toString: function() {
        return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() +
            ' year-old ' + this.gender + ' ' + this.subject + ' teacher';
    }
});

var bob = Person.extend({
    firstName: 'Bob',
    lastName: 'Sabatelli',
    birthDate: new Date('1969-06-07')
});

var patty = Teacher.extend({
    firstName: 'Patricia',
    lastName: 'Hannon',
    subject: 'chemistry',
    yearsExp: 20,
    gender: 'female'
});

console.log('Is Bob an instance of Person? ' + Person.isPrototypeOf(bob));
console.log('Is Bob an instance of Teacher? ' + Teacher.isPrototypeOf(bob));
console.log('Is Patty an instance of Person? ' + Person.isPrototypeOf(patty));
console.log('Is Patty an instance of Teacher? ' + Teacher.isPrototypeOf(patty));
