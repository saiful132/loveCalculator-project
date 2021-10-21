var random = Math.floor(Math.random() *100)+1;

var bTn = document.getElementById("btn")

bTn.onclick = function generate(){

var val1 = document.getElementById("boyName").value
var val2 = document.getElementById("girlName").value
if(val1.length < 3 ){
    alert("ভুল নাম লিখেছেন")
}
if(val2.length < 3 ){
    alert("ভুল নাম লিখেছেন")
}

if(val1.length > 3){
    document.getElementById("paragraph").innerHTML = val1 + " and " + val2 +": " + "  আপনাদের ভালবাসা " + random + " % খাটি!" ;

}
if(val2.length > 3){
document.getElementById("paragraph").innerHTML = val1 + " and " + val2 +": " + " আপনাদের ভালবাসা " + random + " % খাটি!" ;

}




}

