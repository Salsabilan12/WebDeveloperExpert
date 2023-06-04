import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
    <div class = "hero" id = "hero">
      <h2>Welcome to <b>Nyam!</b></h2>
      <p>Please, enjoy to look up for our recommendation restaurant</p>
    </div>

    <h2>Restaurant Recommendation</h2>
    <section>
      <article id="restaurants">
      </article>
    </section>
      
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.restaurantlist();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
