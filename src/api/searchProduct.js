import axios from 'axios';

export default function getSearchProductApigetSearchProduct(body) {
  let header = {
    "Content-Type": "application/json",
    "Bepsy-PricelistId": "defaultPriceGroup",
    "Bepsy-CatalogId": "cloudCatalog",
    "Bepsy-SiteId": "siteUS"
  };
  const getSearchProductApi = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search`;

  return axios.post(getSearchProductApi, body, {header});
}