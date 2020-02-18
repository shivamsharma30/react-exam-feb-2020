const iState = {
    products: []
  };
  
  const searchProductReducer = (state = iState, action) => {
    if (action.type === 'SET_PRODUCTS') {
      return {
        ...state,
        products: action.payload,
      };
    }
    return state;
  };
  
  export default searchProductReducer;
  