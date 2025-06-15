import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/helperToolkit';
import styles from './HomePage.module.scss';
import { fetchProducts } from '../../slices/productSlice';
import { ProductsRow } from '../../components/ProductsRow';
import { Categories } from '../../components/Categories';
import { getHotPrices, getNewModels } from '../../features/getPromoProducts';
import { Banner } from '../../components/Banner';
import { setGlobalLoading } from '../../slices/uiSlice';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);
  const loading = useAppSelector(state => state.product.loading);

  useEffect(() => {
    const getProducts = async () => {
      await dispatch(fetchProducts());
    };

    getProducts();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      dispatch(setGlobalLoading(false));
    }
  }, [loading, dispatch]);

  const hotPrices = getHotPrices(products);
  const newProducts = getNewModels(products);

  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <Banner />

      <ProductsRow
        products={newProducts}
        hasDiscount={false}
        title="Brand new models"
      />

      <Categories />

      <ProductsRow products={hotPrices} hasDiscount={true} title="Hot prices" />
    </div>
  );
};
