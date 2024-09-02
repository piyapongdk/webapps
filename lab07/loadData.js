function loadData1() {
  const xhttp = new XMLHttpRequest();
  id = document.getElementById("staff").value;
  xhttp.onload = function() {
    document.getElementById("result").innerHTML = this.responseText;
    }
  xhttp.open("GET", "https://thepsatri.com/api/employee-number.php?id="+id, true);
  xhttp.send();
}

function loadData2() {
  const xhttp = new XMLHttpRequest();
  id = document.getElementById("office").value;
  xhttp.onload = function() {
    document.getElementById("result").innerHTML = this.responseText;
    }
  xhttp.open("GET", "https://thepsatri.com/api/employee-office.php?id="+id, true);
  xhttp.send();
}

function loadData3() {
  const xhttp = new XMLHttpRequest();
  id = document.getElementById("staff").value;
  xhttp.onload = function() {
	const obj = JSON.parse(this.responseText);  
    document.getElementById("result").innerHTML = obj.employeeNumber+' '+obj.firstName+' '+obj.lastName;
    }
  xhttp.open("GET", "https://thepsatri.com/api/employee-number.php?id="+id, true);
  xhttp.send();
}