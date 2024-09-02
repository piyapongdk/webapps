<?php
	$id = $_GET["id"];
	 
    $conn = mysqli_connect("localhost","lab_sql","Lab@sql310","lab_sql");
    mysqli_set_charset($conn, "utf8");
    $sql = "SELECT * FROM employees WHERE employeeNumber = ".$id;
	
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
	echo(json_encode($row));
?>