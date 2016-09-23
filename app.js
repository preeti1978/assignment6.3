/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n ap p .j s file , Wri te  a J av aSc rip t  p rogr am to  di sp lay the  sum  up to
1000 using  for  a nd w h ile loop  an d d isp lay  th e outp u t i n c onsole
.
*/



//sum of first 1st 1000 numbers using for loop
var sum_using_for = 0; //carry the final result 
var i; //counter variable
for ( i=1; i<=1000;i++){ //incrementing i each time thru loop
	sum_using_for +=i; //adding i each time 
}
console.log("Sum of 1st 1000 numbers using FOR is "+sum_using_for); //outputting in console

//sum using while
var sum_using_while = 0; //carry the final result
 i=1; //counter variable
while(i<=1000){
	sum_using_while+=i; //adding i to sum
	i++; //incrementing i each time thru loop
}
console.log("Sum of 1st 1000 numbers using WHILE is "+sum_using_while);
