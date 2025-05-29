import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import Product from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const product = new Product(dataSource, "product-list");
product.init();

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
