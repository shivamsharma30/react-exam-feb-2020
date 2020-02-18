import axios from 'axios';

export default function getProduct(productId) {
  let header = {
    "Content-Type": "application/json",
    "Bepsy-PricelistId": "defaultPriceGroup",
    "Bepsy-CatalogId": "bepsy_catalog_1",
    "Bepsy-SiteId": "siteUS"
  };
  const getProductApi = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/${productId}?includeErelatedProducts=true`;

  return axios.get(getProductApi, null, {header});
}
