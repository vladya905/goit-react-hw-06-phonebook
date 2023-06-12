import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, contactsDelete } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

function ContactsList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = (id) => {
    dispatch(contactsDelete(id));
  };

  return (
     <ul className={css.TaskList}>
      {contacts.map(contact => (
        <li className={css.TaskList_item} key={contact.id}>
          {contact.name}:{contact.number}

          <button
            className={css.TaskList_button}
            type="button"
            name="delete"
            onClick={() => handleRemoveContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

 
export default ContactsList;