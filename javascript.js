function calcular () {
    var num1 = document.getElementById("ROB").value
    var num2 = document.getElementById("deducoes").value
    var num3 = document.getElementById("liquida").value
    var num4 = document.getElementById("CUSTOS").value
    var num5 = document.getElementById("operacional").value
    var num6 = document.getElementById("despesasop").value
    var num7 = document.getElementById("financeirasop").value
    var num81 = document.getElementById("outras").value
    var num8 = document.getElementById("ir").value
    var num9 = document.getElementById("csll").value
    var num10 = document.getElementById("antes").value
    var num11 = document.getElementById("labore").value
    var num13 = document.getElementById("resultado").value
    
    document.getElementById("liquida").value = num1 - num2
    num3 = document.getElementById("liquida").value
    document.getElementById("operacional").value = num3 - num4
    num5 = document.getElementById("operacional").value
    document.getElementById("ir").value = num5 - num6 - num7 - num81
    num8 = document.getElementById("ir").value
    document.getElementById("antes").value = num8 - num9
    num8 = document.getElementById("antes").value
    document.getElementById("resultado").value = num10 - num11
    num13 = document.getElementById("resultado").value

 /*document.getElementById("liquida").value = num1 - num2
    document.getElementById("operacional").value = num4 - num3
    */
}

function dva () {
    var a = document.getElementById("1").value
    
    var ka = Number (document.getElementById("1.1").value ? document.getElementById("1.1").value:0)
    var sa = Number (document.getElementById("1.2").value ? document.getElementById("1.2").value:0)
    var ta = Number (document.getElementById("1.3").value ? document.getElementById("1.3").value:0)
    var na = Number (document.getElementById("1.4").value ? document.getElementById("1.4").value:0)
    
   

    var ha = Number (document.getElementById("2").value ? document.getElementById("2").value:0)
    var ma = Number (document.getElementById("2.1").value ? document.getElementById("2.1").value:0)
    var ya = Number (document.getElementById("2.2").value ? document.getElementById("2.2").value:0)
    var ra = Number (document.getElementById("2.3").value ? document.getElementById("2.3").value:0)
    var wa = Number (document.getElementById("2.4").value ? document.getElementById("2.4").value:0)
    var ki = document.getElementById("3").value
    var shi = document.getElementById("4").value
    var chi = Number (document.getElementById("5").value ? document.getElementById("5").value:0)
    var ni = Number (document.getElementById("6").value ? document.getElementById("6").value:0)
    var hi = Number (document.getElementById("6.1").value ? document.getElementById("6.1").value:0)
    var mi = Number (document.getElementById("6.2").value ? document.getElementById("6.2").value:0)
    var ri = Number (document.getElementById("6.3").value ? document.getElementById("6.3").value:0)
    var u = document.getElementById("7").value
    var ku = document.getElementById("8").value
    var su = document.getAnimations("8.1").value
    var tsu = document.getElementById("8.1.1").value
    var nu = document.getElementById("8.1.2").value
    var fu = document.getElementById("8.1.3").value
    var mu = document.getElementById("8.2").value
    var yu = document.getElementById("8.2.1").value
    var ru = document.getElementById("8.2.2").value
    var wo = document.getElementById("8.2.3").value
    var e = document.getElementById("8.3").value
    var ke = document.getElementById("8.3.1").value
    var se = document.getElementById("8.3.2").value
    var te = document.getElementById("8.3.3").value
    var ne = document.getElementById("8.4").value
    var he = document.getElementById("8.4.1").value
    var me = document.getElementById("8.4.2").value
    var re = document.getElementById("8.4.3").value
    var o = document.getElementById("8.4.4").value

    
    document.getElementById("1").value = ka + sa + ta + na
    var a = document.getElementById("1").value
    document.getElementById("2").value = ma + ya + ra + wa
    var ha = document.getElementById("2").value
    document.getElementById("3").value = a - ha
    var ki = document.getElementById("3").value
    document.getElementById("5").value = ki - shi
    var chi = document.getElementById("5").value
    console.log(ni)
    document.getAnimations("6").value = chi - hi
    var ni = document.getAnimations("6").value
    document.getAnimations("6.1").value
    var hi = document.getAnimations("6.1").value

 
}