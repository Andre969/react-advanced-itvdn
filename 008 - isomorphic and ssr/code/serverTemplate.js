export default (body) => `
	<!doctype html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <title>React App</title>
	    <link rel="stylesheet" href="assets/style.css">
	  </head>
	  <body>
	    <div id="root">${body}</div>
			<script src="dist/app.js" defer async></script>
	  </body>
	</html>`