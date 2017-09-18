<?php
// check file exist
if (is_uploaded_file($_FILES['file']['tmp_name'])) {
    $path = $_POST['path'];
    //save file of this location
    $filePath = 'upfile' . '/' . $path . '/'.basename($_FILES['file']['name']) ;
    // Move File into location
    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        echo 'File uploas is success';
    } else {
        echo "File upload is fail";
    }
} else {
    echo 'Nothing to upload';
}
