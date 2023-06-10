import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
    if (!localStorage.getItem('contacts')) 
    localStorage.setItem('contacts', JSON.stringify(initialContacts));

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = task => {
    const searchSameName = contacts.map(cont => cont.name).includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: uuidv4(),
      };

      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const changeFilter = e => {
    e.preventDefault();

    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId),
    );
  };

  const visibleContacts = getVisibleContacts();
  const isVisibleFilter = contacts.length > 1;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      {isVisibleFilter && <Filter value={filter} onChangeFilter={changeFilter} />}
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onRemoveContact={removeContact} />
      )}
    </div>
  );
};

export default App;