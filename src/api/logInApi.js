import axios from 'axios';

export default function getAccessToken(body) {
  let header = {
    Authorization: "Bearer YWRtaW46YWRtaW4=",
    "Content-Type": "application/json"
  };
  const getAccessTokenApi = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login`;

  return axios.post(getAccessTokenApi, body, {header});
}
