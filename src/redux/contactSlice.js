import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    contactsAdd: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { contactsAdd, deleteContact } = contactSlice.actions;
