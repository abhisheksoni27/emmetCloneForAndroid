$(document).ready(function () {
  //your code here
  $('#emmet').click(function(){



var valu = $('#text').val();


var con = ["html","body","title","div"]

var a = valu.split("");

var s = a.length;


for(var i=0;i<s;i++){

if(">"==a[i]){
	console.log(i);

var a1 = valu.substring(0,i);
var a2 = valu.substring(i+1);

var co1 = "<"+a1+">" + "<"+a2+"></"+a2+"></"+a1+">" ;




$('#text').val(co1); 
break;

}

else
{


	var co = "<"+valu+"></"+valu+">";
	console.log(co);

$('#text').val(co); 
	



	
	

}


}




});


});