export default function getProducts(data) {
    return {
      type: 'GET_PRODUCTS_SAGA',
      payload: data
    };
  }

export function setProducts(data) {
    return {
      type: 'SET_PRODUCTS',
      payload: data
    };
  }