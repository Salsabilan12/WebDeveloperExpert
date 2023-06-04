import List from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': List, // default page
  '/restaurant-list': List,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
