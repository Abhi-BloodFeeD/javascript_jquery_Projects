<?php include 'database.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS SHOUTBOX</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/script.js"></script>


</head>
<body>
    <div id="container">
        <header>
            <h1> JS SHOUTBOX</h1>
        </header>
        
        <div id="shouts">
                <ul>
                    <li></li>
                </ul>
        </div>
        
        <footer>
            <form action="">
                <label for="name"> NAME :</label>
                <input type="text "  id="name">
                <label for="">Shout Text</label>
                <input type="text"  name="" id="shout">
                <input type="submit" id="submit" value="SHOUT!">
            </form>
        </footer>




    </div>
    
</body>
</html>