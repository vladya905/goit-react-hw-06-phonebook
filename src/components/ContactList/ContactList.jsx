import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsDelete } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = contactId => {
    dispatch(contactsDelete(contactId));
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;