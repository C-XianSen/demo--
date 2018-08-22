<?php
    header("Content-type:text/html;charset=utf-8");  //定义编码和页面
    print_r($_COOKIE);
    echo "欢迎".$_COOKIE[$username]
?>