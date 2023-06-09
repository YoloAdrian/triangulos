var v1,v2,v3,s


function PVAL() {
    v1=document.getElementById('val1').value 
    v1=Number.parseFloat(v1)
}

function SVAL() {
    v2=document.getElementById('val2').value 
    v2=Number.parseFloat(v2)
}
function TVAL() {
    v3=document.getElementById('val3').value 
    v3=Number.parseFloat(v3)
}
function Area(){
    s=((v1+v2+v3)/2)
    document.getElementById("area").innerText = 'El area del triangulo es' + Math.sqrt(s(s-v1)(s-v2)(s-v3));
}