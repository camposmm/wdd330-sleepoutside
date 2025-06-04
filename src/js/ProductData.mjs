export default class ProductData {
  constructor() {
    this.baseUrl = './json/';
  }

  async getData(category) {
    try {
      const response = await fetch(`${this.baseUrl}tents.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      return [];
    }
  }
}
