<!DOCTYPE HTML>

<html>
	<div class="test">
	<head>
	<title>Test</title>
		<LINK href="testcss.css" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="testjs.js"></script>
	</head>	
	<body>
		<div id="bg"><img src="Assets/testBackground.png" width="100%" height="100%" alt=""></div>
		<div id="content">
		<video src="http://ftp.gnu.org/video/Stephen_Fry-Happy_Birthday_GNU-hq_600px_780kbit.ogv" controls="control">
			Your browser does not support video.
		</video>
		</br>
		<script type="text/javascript">
		var userEnteredNumber = prompt( "Please enter a number", "Your number" );
		document.write(userEnteredNumber);
		var myCalc = 1 + parseInt(userEnteredNumber);
		var myResponse = "The number you entered + 1 = " + myCalc + "\n";
		document.write( myResponse );
		document.write( "<br />" );
		document.write( myResponse );
		</script>
		</div>
	</body>
	</div>
</html>