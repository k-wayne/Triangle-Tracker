function trackMaster () {
var a= parseInt(document.getElementById('a').value);
var b= parseInt(document.getElementById('b').value);
var c= parseInt(document.getElementById('c').value);
var triangle=["Equilateral", "Isosceles", "Scalene", "Wrong value(s). Please retry!"];
if(a===b && b===c && a===c){
   alert(triangle[0]);
 }
 else if(a===b && a + b > c ||a===c && a + c > b || b===c && b + c > a){
   alert(triangle[1]);
 }
 else if ( a + b < c || b + c < a || a + c < b){
   alert(triangle[3]);
 }
 else {
   alert(triangle[2]);
 }
}
