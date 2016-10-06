import React from 'react';

var Index = React.createClass({

  render: function() {

    return(
      <html>
        <head>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <title>React search App</title>
          <link rel="stylesheet" type="text/css" href="public/styles.css" />
        </head>
        <body>
            <div id="root"></div>
            <script src="public/bundle.js"></script>
        </body>
    </html>
    );
  }
});

export default Index;