<?php
include_once '../config.php';

class DatabaseAss5 {
    private $host;
    private $dbname;
    private $user;
    private $pass;
    public $conn;
    
    function __construct() {
        $this->host = DB_HOST;
        $this->dbname = DB_NAME;
        $this->user = DB_USER;
        $this->pass = DB_PASS;
    }
    
    function connect() {
        $this->conn = null;

        try {
            $this->conn = new \PDO(
                "mysql:host={$this->host};dbname={$this->dbname}",
                $this->user,
                $this->pass
            );
        } catch(\PDOException $exp) {
            echo "Connection Error: " . $exp->getMessage();
        }

        return $this->conn;
    }
}
?>
