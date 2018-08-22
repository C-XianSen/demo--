<?php
    $jsonStr = file_get_contents("../json/inside.json");

    $totalArr = json_decode($jsonStr);

    $randomkeyArr = array_rand($totalArr,8);

    $resultArr = array();

    for ($i=0; $i < count($randomkeyArr); $i++) { 
        $randomKey = $randomkeyArr[$i];

        $randomObj = $totalArr[$randomKey];

        array_push($resultArr,$randomObj);
    }

    $keyValueArr = array(
        'items' => $resultArr
    );

    echo json_encode($keyValueArr);
?>