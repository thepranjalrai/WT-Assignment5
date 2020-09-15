<?php
include_once '../config.php';
require_once './dbconn.php';
require './dbhandler.php';

header('Content-type: application/json');

$db =  new DatabaseAss5();
$handler = new Handler($db->connect());

$stmt = $handler->fetchUsers();

$res = array(
    'code' => '200',
    'response' => array()
);

if ($stmt->rowCount() > 0) {
    while($entry = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($res['response'], $entry);
    }
}

echo json_encode($res);
?>
