
  export default function logIn(data) {
    return {
      type: 'LOG_IN_SAGA',
      payload: data
    };
  }

  export function setAccessToken(data) {
    return {
      type: 'SET_ACCESS_TOKEN',
      payload: data
    };
  }