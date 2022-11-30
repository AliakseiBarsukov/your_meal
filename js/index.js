const modalProduct = document.querySelector('.modal_product');
const productDetail = document.querySelector('.product__detail');
const orderSubmit = document.querySelector('.order__submit');
const modalDelivery = document.querySelector('.modal_delivery');
const catalogList = document.querySelector('.catalog__list');


const product = {
  title: 'Super Maxxxx',
  price: 10000,
  weight: 5000,
  calories: 15000,
  description: 'Огромный бургер для большо компании',
  image: 'img/megaburger.jpg',
  ingredients: ['Пшеничная булочка', ['Мега котлета изговядины'], ['Красный лук'], ['Листья салата'], ['Соус сорчичный'], ['Много сыра']]
}

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modaProductPriceCount = document.querySelector('.modal-product__price-count');

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
ingredientsCalories.textContent = product.calories;
modaProductPriceCount.textContent = product.price;

ingredientsList.textContent = '';

const ingredientsListItem = product.ingredients.map((item) => {
  console.log('item: ', item);
  const li = document.createElement('li');
  li.classList.add('ingredients__item');
  li.textContent = item;
  return li;
})

ingredientsList.append(...ingredientsListItem);


// open modal product
catalogList.addEventListener('click', ({target}) => {
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    modalProduct.classList.add('modal_open')
  }
});

modalProduct.addEventListener('click', ({target}) => {
  if (target === modalProduct || target.closest('.modal__close')) {
    modalProduct.classList.remove('modal_open')
  }
})

// open modal card
orderSubmit.addEventListener('click', () => {
  modalDelivery.classList.add('modal_open')
});

modalDelivery.addEventListener('click', ({target}) => {
  if (target === modalDelivery || target.closest('.modal__close')) {
    modalDelivery.classList.remove('modal_open')
  }
})