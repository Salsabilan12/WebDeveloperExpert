/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('#query');
  I.seeElement('#query');
  I.waitForElement('.restaurant-item_not_found');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item_not_found');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');
  I.amOnPage('/');

  I.waitForElement('.desc h3 a');
  I.seeElement('.desc h3 a');

  const firstResto = locate('.desc h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.item');
  I.seeElement('.item');
  const likedRestoTitle = await I.grabTextFrom('.desc h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item_not_found');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');
  I.amOnPage('/');

  I.waitForElement('.desc h3 a');
  I.seeElement('.desc h3 a');

  const firstResto = locate('.desc h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.item');
  I.seeElement('.item');
  const likedRestoTitle = await I.grabTextFrom('.desc h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(locate('.desc h3 a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item_not_found');
  I.seeElement('.restaurant-item_not_found');

  const noLikedRestaurant = await I.grabTextFrom('.restaurant-item_not_found');

  assert.strictEqual(noLikedRestaurant, 'Tidak ada restaurant untuk ditampilkan');
});
