import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant">  
  <h2 class="name">${restaurant.name}</h2>
  <div class="restaurant_info">
  <div class="image">  
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
  </div>
  <div class="information">
    <div class="rating">
      <p>⭐️</p>
      <h4>${restaurant.rating}</h4>
    </div>
    <h4>Location :</h4>
    <p>${restaurant.city}, ${restaurant.address}</p>
  </div>
  </div>
  <div class="description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="wrap">
    <h3>Menu</h3>
    <div class="menu">
      <div class="card">
        <h4>Foods</h4>
        <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
      <div class="card">
        <h4>Drinks</h4>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>
  </div>
  <div class = "review">
    <h3>Customer Reviews</h3>
    <p>${restaurant.customerReviews
    .map((customer) => customer.review)
    .join(', ')}
    </P>
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class = "item">
    <img class="lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
    <div class = "desc">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>⭐️<span>${restaurant.rating}</span></p>
      <h4>Location : ${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
