import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './Product.scss';

const Product = ({product}) => {
    return (
        <>
            <Grid item xs={3}>
            <div>
                <div>
                    <img src={product.compositeProducts[0].EProductMedia.smallURI} alt="" />
                </div>
                <div>
                    <h3>{product.sfdcName}</h3>
                </div>
                <div>
                    <span>{product.compositeProducts[0].priceEntry.listPrice}</span>
                </div>
                <Link to={`/productDetailsPage/${product.productId}`} >View Details</Link>
                </div>  
            </Grid>
        </>
    )
};

export default Product;