var badElem = $('.bad');

setInterval(function () {
    if (badElem.css('visibility') == 'hidden') {
        badElem.css('visibility', 'visible');
    } else {
        badElem.css('visibility', 'hidden');
    }
}, 500);

badElem.css('color', 'red');

