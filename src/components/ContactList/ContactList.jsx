import { useDispatch, useSelector } from 'react-redux';

import Contact from '../Contact/Contact.jsx';

import { deleteContact } from '../../redux/contactsOps.js';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  return (
      <ul className={css.grid}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={deleteContactHandler}
          />
        ))}
      </ul>
  );
};

export default ContactList;
