<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>upload file</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="container">
        <form action="uploadfile.php" method="post" enctype="multipart/form-data">
            <h1>upload file</h1>
            <input type="file" name="file" id="file">
            <hr>
            <div>
                <h3>chosen folder save</h3>
                <select name="path" id="path">
                    <option value="images">images</option>
                    <option value="musics" selected="selected">musics</option>
                    <option value="videos">videos</option>
                </select>
            </div>
            <br>
            <input type="submit" value="UPLOAD" name="submit">
        </form>
        <br>
        <button class="btn_sm" onclick="ajax()">ajax show alert</button>
    </div>
<script type="text/javascript" src="js/ajax.js"></script>
</body>
</html>