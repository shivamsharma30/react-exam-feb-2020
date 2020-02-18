
  export default function getProductDetails(data) {
    return {
      type: 'GET_PRODUCT_DETAILS_SAGA',
      payload: data
    };
  }

  export function setProductDetails(data) {
    return {
      type: 'SET_PRODUCT_DETAILS',
      payload: data
    };
  }