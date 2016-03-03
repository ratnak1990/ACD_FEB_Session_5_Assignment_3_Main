function showRemainder(x,y){
	var remainder= x%y;
	console.log(remainder);
	return remainder;
	
};
document.getElementById("result").innerHTML= "Remainder when 15 is divided 9  =  " + window.showRemainder(15,9);