import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={css.TaskList}>
    {contacts.map(contact => (
      <li className={css.TaskList_item} key={contact.id}>
        {contact.name + ':' + contact.number}

        <button
          className={css.TaskList_button}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(contact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;