import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <link rel="icon" href="/img/icon-48x48.png" />
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />

        {/* скрипт наполнения вспомогательнго объекта initState для работы гидратации */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />

        {/* скрипты собранные через Webpack */}
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <title>Freezer</title>
      </head>
      <body>
        <div id="root">
          {/* компонент обёртка StaticRouter для передачи маршрута клиентским роутерам */}
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
