import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactsAdd: (state, { payload }) => {
      const isDuplicate = state.items.find(
        (contact) => contact.name === payload.name
      );

      if (!isDuplicate) {
        state.items.push({ id: Date.now().toString(), ...payload });
      } else {
        alert("This contact already exists");
      }
    },
    contactsDelete: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { contactsAdd, contactsDelete, filterChange } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.contacts.filter;
export const selectFilteredContacts = (state) => {   // Экспортируем новый селектор
  const { items, filter } = state.contacts;
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default contactsSlice.reducer;