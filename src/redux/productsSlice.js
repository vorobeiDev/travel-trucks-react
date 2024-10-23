import { createSelector, createSlice } from '@reduxjs/toolkit';

import { getIsNameEqual, getIsPhoneEqual } from '../helpers/filterHelpers.js';
import { fetchProducts } from './productsOps.js';
import { selectNameFilter } from './filtersSlice.js';

const contactsInitialState = {
  total: 0,
  page: 1,
  items: [],
  loading: false,
  error: null
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
}

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: 'products',
  initialState: contactsInitialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const newItems = action.payload.items.filter(
          (newItem) => !state.items.some((item) => item.id === newItem.id)
        );
        state.total = action.payload.total;
        state.items = [...state.items, ...newItems];
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, handleRejected)
  },
});


export const selectProducts = (state) => state.products;
export const selectProductItems = (state) => state.products.items;

export const selectFilteredContacts = createSelector(
  [selectProductItems, selectNameFilter],
  (contacts, search) => {
    return contacts.filter((contact) => getIsNameEqual(contact.name, search)
      || getIsPhoneEqual(contact.phone, search));
  },
);

export const {
  setPage,
} = contactsSlice.actions;

export default contactsSlice.reducer;