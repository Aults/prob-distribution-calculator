
function factorial(k) {
    if(k == 0) return 1;
    var sum = k--;
    
    while(k > 0) {
        sum *= k--;
    }
    return sum;
}

function binomial() {
    var fn = document.getElementById("fn2").value;
    var fp = document.getElementById("fp2").value;
    var p = new Array();
    var text = [];
    p[0] = Math.pow((1-fp), fn);
    text.push("p0 - " + p[0] + "<br>");
    for(var y = 1; y <= fn; y++) {
        p[y] = (fp/(1-fp))*((fn-(y-1))/(y))*p[y-1];
        text.push("p[z] when P is " + fp + " and n is " + fn + " = " + p[y] + "<br>");
    }
    var len = p.length-1
    text.push("Final answer, when p[" + len + "] is " + p[len] + "<br>")
    document.getElementById("para1").innerHTML = text;
}

function poisson() {
    var fn = document.getElementById("fz1").value;
    var lambda = document.getElementById("lambda").value;
    var p = new Array();
    var text = [];
    p[0] = Math.pow(Math.E, -lambda);
    text.push("p0 - " + p[0] + "<br>");
    for(var z = 1; z <= fn; z++) {
        p[z] = (lambda)/(z)*p[z-1];
        text.push("p[z] when lamda is " + lambda + " and z is " + z + " = " + p[z] + "<br>");
    } 
    var len = p.length-1
    text.push("Final answer, when p[" + len + "] is " + p[len] + "<br>")
    document.getElementById("para").innerHTML = text;
}