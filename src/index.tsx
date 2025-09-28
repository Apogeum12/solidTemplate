/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Navigate } from '@solidjs/router';
import 'solid-devtools';

import App from './paths/App';
import NonFound from './paths/NonFound';

const root = document.getElementById('root');
if (!root || import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/404" component={NonFound} />
      <Route path="*" component={() => <Navigate href="/404" />} />
    </Router>
  ), root
);
