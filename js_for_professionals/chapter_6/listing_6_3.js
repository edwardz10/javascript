var firstName = document.getElementById('firstName');

firstName.onclick = function(e) {
    console.log('You clicked in the ' + e.target.id + ' field!');
    e.target.style.background = 'green';
};
