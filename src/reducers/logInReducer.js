const iState = {
    accessToken: ''
  };
  
  const logInReducer = (state = iState, action) => {
    if (action.type === 'SET_ACCESS_TOKEN') {
      const { accessToken } = action.payload;
      return {
        ...state,
        accessToken,
      };
    }
    return state;
  };
  
  export default logInReducer;
  