<?php
         header('Context.type:text/html;charset=utf-8');  
         header("Access-Control-Allow-Origin:*"); 
         $json = file_get_contents("php://input");
         $tel=$_POST['phone_number'];
         $tel=json_decode($tel);
        // $tel=$tel.Replace("'", ""); 
        // var_dump ($tel);
        // $number = strstr($json, '=');
        // echo '$number';
         $coon=new MySQLi("localhost","root","","db_student_admin");
         $coon->query("set names 'utf-8'");//写库 
         $coon->query("set character set 'utf8'");//读库 

        //  if($coon){
        //                         echo '连接成功';
        //         }else{
        //                          echo '连接失败';
        //         }
                 
      $select="SELECT *FROM asus2";
      $row= $coon->query($select);
      $result=$row->fetch_all();
      foreach($result as $key=>$value){
        //   $value=json_encode($value[1]);
        //   var_dump ($value[1]);
        if($value[1]!==$tel){
                echo '0';
        }else{
            echo '1';
        }
}
      

?>