function pyramid(){
	var n = document.getElementById("num").value;
	var d = document.getElementById("detail");
	d.innerText = "";
	for(i=1;i<=n;i++){
		for(j=1;j<=i;j++){
			d.innerText = d.innerText + "*";
		}
		d.innerHTML = d.innerHTML + "<br>";
	}

}