const iState = {
    product: null
  };

  const productDetailsReducer = (state = iState, action) => {
    if (action.type === 'SET_PRODUCT_DETAILS') {
      return {
        ...state,
        product: action.payload,
      };
    }
    return state;
  };
  
  export default productDetailsReducer;
  