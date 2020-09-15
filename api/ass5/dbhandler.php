<?php
include_once '../config.php';

class Handler {
    private $conn;
    private $table;

    function __construct($conn) {
        $this->conn = $conn;
        $this->table = TAB_ASS5;
    }

    public function addUser($email, $fname, $lname, $phone, $occ) {
        $sql_statement = "INSERT INTO {$this->table}
            VALUES ( :email, :fname, :lname, :phone, :occupation );";

        $stmt = $this->conn->prepare($sql_statement);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":fname", $fname);
        $stmt->bindParam(":lname", $lname);
        $stmt->bindParam(":phone", $phone);
        $stmt->bindParam(":occupation", $occ);

        $stmt->execute();

        return $stmt->rowCount();
    }

    public function fetchUsers() {
        $sql = "SELECT * FROM {$this->table}";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt;
    }
}
?>
