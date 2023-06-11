import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
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
  },
});

export const { contactsAdd, contactsDelete } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;