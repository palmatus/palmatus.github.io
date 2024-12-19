// Hora
function inicio() {
    relog();
    fecha();
    año();

}

function relog() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("relog").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () { relog() }, 500);
}


// Hace que se actualize la hora
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


// Fecha
function fecha() {
    var today = new Date();

    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";


    var day = weekday[today.getDay()];


    var d = today.getDate();


    var month = new Array(12);
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    var m = month[today.getUTCMonth()];

    var total = day + " | " + d + " | " + m;
    console.log(total);

    document.getElementById('fecha').innerHTML = total;
}

function año() {
    var today = new Date()
    var year = today.getFullYear();
    document.getElementById('año').innerHTML = year
}

// event listener for keyup
function checkTabPress(e) {
    "use strict";
    // pick passed event of global event object
    e = e ||;
    var activeElement;
    if (e.keyCode == 9) {
        // Here read the active selected link.
        activeElement = document.activeElement;
        // If HTML element is and anchor
        if (activeElement.tagName.toLowerCase() == 'a')
            // get it's hyperlink
            alert(activeElement.href);
    }
}

var body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);
