<?php
include_once '../config.php';
require_once './dbconn.php';
require_once './dbhandler.php';

header('Content-type: application/json');

$db = new DatabaseAss5();
$handler = new Handler($db->connect());

$email = $_POST['email'] ?? null;
$fname = $_POST['fname'] ?? null;
$lname = $_POST['lname'] ?? null;
$phone = $_POST['phone'] ?? null;
$occup = $_POST['occup'] ?? null;

$res = array(
    'code' => '500',
    'response' => 'Error updating the table'
);

if ($handler->addUser($email, $fname, $lname, $phone, $occup) > 0) {
    $res['code'] = '200';
    $res['response'] = "Successfully added the new user";
}

echo json_encode($res);
?>
