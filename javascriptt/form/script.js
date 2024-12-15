function leervariable(){

    var num1 = document.getElementById("Num1").value;
    num1 = parseInt(num1)
    var num2 = document.getElementById("Num2").value;
    num2 = parseInt(num2)
    var num3 = document.getElementById("Num3").value;
    num3 = parseInt(num3)
    var num4 = document.getElementById("Num4").value;
    num4 = parseInt(num4)
    var num5 = document.getElementById("Num5").value;
    num5 = parseInt(num5)
    var num6 = document.getElementById("Num6").value;
    num6 = parseInt(num6)
    var num7 = document.getElementById("Num7").value;
    num7 = parseInt(num7)
    var num8 = document.getElementById("Num8").value;
    num8 = parseInt(num8)
    var num9 = document.getElementById("Num9").value;
    num9 = parseInt(num9)
    var num10 = document.getElementById("Num10").value;
    num10 = parseInt(num10)
    
    var suma = num1 + num2+ num3+ num4 + num5+ num6+ num7+ num8+ num9+ num10;

    var promedio = suma / 10;
    
    document.getElementById("suma").innerHTML= "La suma es " + suma;
    document.getElementById( "promedio" ).innerHTML= " El promedio es  " + promedio;
}