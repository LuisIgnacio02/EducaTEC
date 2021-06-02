function bmih()
{
    var w = parseFloat(document.getElementById("weighth").value);
    var h = parseFloat(document.getElementById("heighth").value)/100;
    var hom = parseFloat(document.getElementById("ageh").value);
    var b = w/(h*h);
    document.getElementById("ansh").value = String(b.toPrecision(3)) +" kg/m^2";
    if (hom === 4) {
        if (b < 14) {
            document.getElementById("categoryh").value = "Desnutrición";
        } else if (b >= 14 && b <= 17) {
            document.getElementById("categoryh").value = "Peso saludable";
        } else if (b > 17 && b <= 17.8) {
            document.getElementById("categoryh").value = "Sobrepeso";
        }
        else if (b > 17.8) {
            document.getElementById("categoryh").value = "Obesidad infantil";
        }
    } else if (hom === 5) {
        if (b < 13.8) {
            document.getElementById("categoryh").value = "Desnutrición";
        } else if (b >= 13.8 && b <= 16.8) {
            document.getElementById("categoryh").value = "Peso saludable";
        } else if (b > 16.8 && b <= 18) {
            document.getElementById("categoryh").value = "Sobrepeso";
        } else if (b > 18) {
            document.getElementById("categoryh").value = "Obesidad infantil";
        }
    } else if (hom === 6) {
        if (b < 13.8) {
            document.getElementById("categoryh").value = "Desnutrición";
        } else if (b >= 13.8 && b <= 17) {
            document.getElementById("categoryh").value = "Peso saludable";
        } else if (b > 17 && b <= 18.4) {
            document.getElementById("categoryh").value = "Sobrepeso";
        } else if (b > 18.4) {
            document.getElementById("categoryh").value = "Obesidad infantil";
        }
    } else if (hom === 7) {
        if (b < 13.8) {
            document.getElementById("categoryh").value = "Desnutrición";
        } else if (b >= 13.8 && b <= 17.4) {
            document.getElementById("categoryh").value = "Peso saludable";
        } else if (b > 17.4 && b <= 19.2) {
            document.getElementById("categoryh").value = "Sobrepeso";
        } else if (b > 19.2) {
            document.getElementById("categoryh").value = "Obesidad infantil";
        }
    }
}

function bmim()
{
    var w = parseFloat(document.getElementById("weightm").value);
    var h = parseFloat(document.getElementById("heightm").value)/100;
    var muj = parseFloat(document.getElementById("agem").value);
    var b = w/(h*h);
    document.getElementById("ansm").value = String(b.toPrecision(3)) +" kg/m^2";
    if (muj === 4) {
        if (b < 13.8) {
            document.getElementById("categorym").value = "Desnutrición";
        } else if (b >= 13.8 && b <= 16.8) {
            document.getElementById("categorym").value = "Peso saludable";
        } else if (b > 16.8 && b <= 18) {
            document.getElementById("categorym").value = "Sobrepeso";
        }
        else if (b > 18) {
            document.getElementById("categorym").value = "Obesidad infantil";
        }
    } else if (muj === 5) {
        if (b < 13.6) {
            document.getElementById("categorym").value = "Desnutrición";
        } else if (b >= 13.6 && b <= 16.8) {
            document.getElementById("categorym").value = "Peso saludable";
        } else if (b > 16.8 && b <= 18.2) {
            document.getElementById("categorym").value = "Sobrepeso";
        } else if (b > 18.2) {
            document.getElementById("categorym").value = "Obesidad infantil";
        }
    } else if (muj === 6) {
        if (b < 13.4) {
            document.getElementById("categorym").value = "Desnutrición";
        } else if (b >= 13.4 && b <= 17) {
            document.getElementById("categorym").value = "Peso saludable";
        } else if (b > 17 && b <= 18.8) {
            document.getElementById("categorym").value = "Sobrepeso";
        } else if (b > 18.8) {
            document.getElementById("categorym").value = "Obesidad infantil";
        }
    } else if (muj === 7) {
        if (b < 13.4) {
            document.getElementById("categorym").value = "Desnutrición";
        } else if (b >= 13.4 && b <= 17.6) {
            document.getElementById("categorym").value = "Peso saludable";
        } else if (b > 17.6 && b <= 19.6) {
            document.getElementById("categorym").value = "Sobrepeso";
        } else if (b > 19.6) {
            document.getElementById("categorym").value = "Obesidad infantil";
        }
    }
}