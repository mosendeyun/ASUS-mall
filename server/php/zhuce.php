<?php
         header('Context.type:text/html;charset=utf-8');
        //  $json = file_get_contents("php://input");
        //  $json=json_decode($json);//转换为对象  在PHP中 关联数组、对象中把对象 用json——encode 转化成字符串 
        //  $number=($json->val);
        $number=$_GET["val"];
        echo "$number";
         $coon=new MySQLi("localhost","root","","db_student_admin");
         $coon->query("set names 'utf-8'");//写库 
         $coon->query("set character set 'utf8'");//读库 
         if($coon){
                                echo '连接成功';
                }else{
                                 echo '连接失败';
                }
                $select="INSERT INTO asus (number,username,password) VALUES ('$number','','')";
                echo '$select';
                $result=$coon->query($select);

        // echo "haha";





?>