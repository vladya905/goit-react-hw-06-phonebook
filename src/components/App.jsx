import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { store, persistor } from '../redux/store';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { selectContacts } from '../redux/contactsSlice';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;