import React, {useRef} from 'react';
import {Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../actions/getProductAction';
import Product from '../../components/Product';
import Grid from '@material-ui/core/Grid';
import './SearchPage.scss';

const SearchPage = props => {
  const searchFieldRef = useRef(null);
  const { products } = useSelector(state => state.searchProductReducer);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const searchText = searchFieldRef.current.value;
    dispatch(getProducts(searchText));
  }

  const renderProdect= () => {
    return products.map(ob => <Product key={ob.sfid} product = {ob} />);
  };

  return (
    <>
      <TextField id="standard-basic" inputRef={searchFieldRef} label="search" />
      <Button onClick={onClickHandler}  variant="contained" color="primary">
        Search
      </Button>
      <Grid className="grid-container" container spacing={3}>
        {renderProdect()}
      </Grid>
    </>
  );
}

export default SearchPage; 
