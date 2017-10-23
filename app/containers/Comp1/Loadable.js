/**
 *
 * Asynchronously loads the component for Comp1
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
