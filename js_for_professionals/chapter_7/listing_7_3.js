window.addEventListener('DOMContentLoaded', function(){
    var validBtn = document.getElementById('validBtn');
    var overallBtn = document.getElementById('overallBtn');
    var form = document.getElementById('nameForm');
    var vDetails = document.getElementById('vDetails');
    var vResults = document.getElementById('vResults');

    overallBtn.addEventListener('click', function(){
        var output = '';
        var inputs = form.querySelectorAll('#fields > input');

        for (var x = 0; x < inputs.length; x++) {
            var el = inputs[x];
            output += el.id + ' : ' + el.validity.valid;
            if (!el.validity.valid) {
                output += ' [';
                for (var reason in el.validity) {
                    if (el.validity[reason]) {
                        output += reason;
                    }
                }
                output += ']';
            }   
            output += '<br>';
        }

        vDetails.innerHTML = output;
    });

});

