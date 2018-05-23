$(document).ready(function(){
    var header = $('header');

    var backgrounds = new Array(
        'url(img/bg-1.png)',
        'url(img/bg-2.png)',
        'url(img/bg-3.png)'
    );


    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 5000);

    header.css('background-image', backgrounds[0]);
});



