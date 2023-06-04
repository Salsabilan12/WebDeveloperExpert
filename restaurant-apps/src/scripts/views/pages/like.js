import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h2>Your Favorite Restaurant</h2>
    <section>
      <article id="restaurants" class="restaurants">
      </article>
      <div id="query"></div>
    </section>
      
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const query = document.getElementById('query');

    if (restaurants.length < 1) {
      query.innerHTML += `
      <div>
        <h2 tabindex="0" class="restaurant-item_not_found">Tidak ada restaurant untuk ditampilkan</h2>
      </div>
      `;

      restaurantsContainer.innerHTML = '';
    } else if (restaurants.length >= 1) {
      const Container = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        Container.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      query.innerHTML = '';
    }
  },
};

export default Like;
