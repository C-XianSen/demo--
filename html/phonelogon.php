<?php
header("Content-type:text/html;charset=utf-8");  //定义编码和页面

// 连接数据库
$link = mysqli_connect('localhost','root','','login');
mysqli_set_charset($link,'utf8');
$name=$_POST['name'];
$pwd=$_POST['pwd'];
$hadden=$_POST['hadden'];

if($name==''){
echo"<script>alert('你的用户名不能为空，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
exit;
}
if($pwd==''){
echo"<script>alert('你的密码不能为空，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
exit;
}

$sql_select="select id,username,password from user where username= ?"; //从数据库查询信息
$stmt=mysqli_prepare($link,$sql_select);
mysqli_stmt_bind_param($stmt,'s',$name);
mysqli_stmt_execute($stmt);
$result=mysqli_stmt_get_result($stmt);
$row=mysqli_fetch_assoc($result);

if($row){
    echo "<script>alert('您输入的用户名已存在,请重新注册！');location='login.html'</script>";
    exit;
} else {
$insert_sql="insert into user(username,password)values(? , ? )";

$stmt=mysqli_prepare($link,$insert_sql);

mysqli_stmt_bind_param($stmt,'ss',$name,$pwd);

$result_insert=mysqli_stmt_execute($stmt);

if($result_insert){
    echo "<script>alert('您已注册成功，返回登录');location='login.html'</script>";
    exit;
  }
}
?>