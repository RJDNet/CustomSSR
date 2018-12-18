import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import { flushToHTML } from 'styled-jsx/server';

import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const styles = flushToHTML();

  return `
    <html>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styles}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};