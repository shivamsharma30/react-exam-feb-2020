import React, { useEffect } from 'react';
import getProductDetails from '../../actions/productDetailsAction';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './ProductDetailsPage.scss';

const ProductDetailsPage = props => {
  const { product } = useSelector(state => state.productDetailsReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    const productId = props.location.pathname.split('/').pop();
    dispatch(getProductDetails(productId));
  },[])

  return (
    <>
      {
        product&& (
        <div>
          <Grid className="product-details-container" container spacing={3}>
            <Grid className="image-container" item xs={6}>
              <img src={product.compositeProducts[0].media.fullURIs[0]} />
            </Grid>
            <Grid item xs={6}>
              <h3>{product.sfdcName}</h3>
              <h4>{product.compositeProducts[0].priceEntry.listPrice}</h4>
            </Grid>
          </Grid>
        </div>
        )
      }
    </>
    
  );
}

export default ProductDetailsPage; 
