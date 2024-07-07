function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("result").innerHTML = this.responseText;
    }
  xhttp.open("GET", "database.php?staff=1056", true);
  xhttp.send();
}