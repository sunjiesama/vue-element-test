<?php
//链接数据库
header("Access-Control-Allow-Origin:*");

$db=new mysqli('127.0.0.1','root','root','vue-element-test');

//查询数据库
$data=$db->query('SELECT *FROM userinfo');

//该数组用来接收被转化后的数据
$arr=[];
while($row = $data->fetch_array(MYSQLI_ASSOC))
{
    array_push($arr,$row);
};
$json=json_encode($arr);
echo $json;
