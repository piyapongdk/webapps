<?php
	$id = $_GET["id"];
	 
    $conn = mysqli_connect("localhost","lab_sql","Lab@sql310","lab_sql");
    mysqli_set_charset($conn, "utf8");
    $sql = "SELECT * FROM employees WHERE officeCode = ".$id;
	
    $result = mysqli_query($conn,$sql);
    //$rows = mysqli_fetch_all($result);
	
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		$rows[] = $r;
	}
	echo(json_encode($rows));
?>