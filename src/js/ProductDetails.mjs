// src/js/ProductDetails.mjs
import { setLocalStorage, getParam } from './utils.mjs';

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
    // Populate the page with product details
    document.querySelector('.product-detail__name').textContent = this.product.Name;
    document.querySelector('.product-detail__price').textContent = `$${this.product.FinalPrice}`;
    document.querySelector('.product__image').src = this.product.Images.PrimaryMedium;
    document.querySelector('.product__image').alt = this.product.Name;
    document.querySelector('.product__description').textContent = this.product.Description;
  }
}