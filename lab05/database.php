<?php
	$id = $_GET["staff"];
	 
    $conn = mysqli_connect("localhost","lab_sql","Lab@sql310","lab_sql");
    mysqli_set_charset($conn, "utf8");
    $sql = "SELECT * FROM employees WHERE employeeNumber = ".$id;
	//echo("SQL :".$sql);
	//echo("<br><br>");
	
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
	echo($row["employeeNumber"]." ".$row["firstName"]." ".$row["lastName"]);
?>