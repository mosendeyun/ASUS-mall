<?php
    header("Access-Control-Allow-Origin:*");
    header('Context.type:text/html;charset=utf-8');
    header('Content-type:text/json');        
     $json_string=file_get_contents('../json/shop.json');
    //  $data=json_encode($json_string);
    //  var_dump($data);
    echo $json_string;
?>