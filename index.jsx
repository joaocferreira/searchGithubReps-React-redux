import React from 'react';

var Index = React.createClass({

  render: function() {

    return(
      <html>
        <head>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <title>React search App</title>
        </head>
        <body style={{ margin: '0px' }}>
            <div id="root"></div>
            <script src="public/bundle.js"></script>
        </body>
    </html>
    );
  }
});

export default Index;