import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    
    document.getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    setLocalStorage('so-cart', this.product);
  }

  renderProductDetails() {
    // Get DOM elements
    const title = document.querySelector('.product-detail__title');
    const brand = document.querySelector('.product-detail__brand');
    const price = document.querySelector('.product-detail__price');
    const image = document.querySelector('.product-detail__image');
    const description = document.querySelector('.product-detail__description');

    // Populate with product data
    title.textContent = this.product.Name;
    brand.textContent = this.product.Brand;
    price.textContent = `$${this.product.FinalPrice}`;
    image.src = this.product.Image;
    image.alt = this.product.Name;
    description.textContent = this.product.Description;
  }
}