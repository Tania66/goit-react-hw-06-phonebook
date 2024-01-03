import { createSelector } from '@reduxjs/toolkit';

export const filterContacts = state => state.contacts.contacts;
export const selectedFilter = state => state.filterStore.filter;

export const selectFilterContact = createSelector(
  [filterContacts, selectedFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
