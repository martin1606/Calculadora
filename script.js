function plus(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    let c;
    c = (n1 + n2);
    document.getElementById("resul").innerHTML = c;
}

function minus(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    let c;
    c = (n1 - n2);
    document.getElementById("resul").innerHTML = c;
}

function multi(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    let c;
    c = (n1 * n2);
    document.getElementById("resul").innerHTML = c;
}

function division(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    let c;
    c = (n1 / n2);
    document.getElementById("resul").innerHTML = c;
}

function limpar(){
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
}