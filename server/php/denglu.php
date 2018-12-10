<?php
         header('Context.type:text/html;charset=utf-8');  
         header("Access-Control-Allow-Origin: *"); 
         $json = file_get_contents("php://input");
         $tel=$_POST['phone_number'];
         $tel=json_decode($tel);
        // $tel=$tel.Replace("'", ""); 
        // var_dump ($tel);
        // $number = strstr($json, '=');
        // echo '$number';
         $coon=new MySQLi("localhost","root","","db_student_admin","3306");
         $coon->query("set names 'utf-8'");//写库 
         $coon->query("set character set 'utf8'");//读库 

        //  if($coon){
        //                         echo '连接成功';
        //         }else{
        //                          echo '连接失败';
        //         }
                 
      $select="select * from asus2 where number= $tel";
      $row= $coon->query($select);
//       echo '$row';
      $result=$row->fetch_all();
//       var_dump ($result);
      if($result){
                        echo '1';
      }else{
              echo '0';
      }
//       foreach($result as $key=>$value){
//         //   $value=json_encode($value[1]);
//         //   var_dump ($value[1]);
//         if($value[1]!==$tel){
//                 var_dump ($value[1]);
//                 echo 'false';
//         }else{
//             echo 'true';
//         }
// }
      
// if($result) {
//         // 输入正确
//         $arr = array("code" => "200", "msg" => "", "data" => array("id" => $result["id"], "token"=> "1112233"));
  
//       } else {
//         // 输入错误
//         $arr = array("code" => "1000", "msg" => "用户名或者密码错误");
//       }
//       echo json_encode($arr);
  
?>