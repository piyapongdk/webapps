function cToF() 
{
	var cTemp = document.getElementById("celsius").value;
	var cToFahr = cTemp * 9 / 5 + 32;
	document.getElementById("fahrenheit").value = cToFahr;
}
