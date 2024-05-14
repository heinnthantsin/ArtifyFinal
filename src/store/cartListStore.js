import create from 'zustand';
import CartList from '../components/ui/CartList';
import React from 'react';

const useCartListStore = create((set) => ({
    cartList : <CartList />
}))

