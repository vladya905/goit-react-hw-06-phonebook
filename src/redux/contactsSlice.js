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
      }
    },
    contactsDelete: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
    contactsFilter: (state, { payload }) => {
      state.filter = payload;
    },
    contactsFilterClear: (state) => {
      state.filter = '';
    },
  },
});

export const { contactsAdd, contactsDelete, contactsFilter, contactsFilterClear } =
  contactsSlice.actions;

export const selectContacts = (state) => {
  const { contacts: { items, filter } } = state;
  const normalizedFilter = filter.toLowerCase();
  
  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}

export const selectFilter = (state) => state.contacts.filter;

export default contactsSlice.reducer;