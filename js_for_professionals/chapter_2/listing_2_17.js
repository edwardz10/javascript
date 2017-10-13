var today = new Date();
var re = /[a-z]+/i;

console.log('typeof today: ' + typeof today);
console.log('typeof re ' + typeof re);

if (today instanceof Date) {
    console.log('today is an instance of Date');
}

if (re instanceof RegExp) {
    console.log('re is an instance of RegExp');
}


