function reset() {
    document.getElementById('red').checked = false;
    document.getElementById('green').checked = false;
    document.getElementById('blue').checked = false;
    document.getElementById('black').checked = false;
    document.getElementById('hero').checked = false;
    document.getElementById('spell').checked = false;
    document.getElementById('creep').checked = false;
    for (var i = 0; i < 12; i++) {
        ce = document.getElementById(i + 1);
        ce.style.display = 'block';
    }
}
function filtera(b) {
    var cardsid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    if (!document.getElementById(b).checked) {
        cardsid.forEach(function (val, i, arr) {
            if (!document.getElementById(val).className.includes(b)) {
                document.getElementById(val).style.display = 'block';
            }
        })
    } else {
        cardsid.forEach(function (val, i, arr) {
            if (!document.getElementById(val).className.includes(b)) {
                document.getElementById(val).style.display = 'none';
            }
        })
    }
}