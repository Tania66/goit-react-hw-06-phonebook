import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { selectFilterContact } from '../../redux/filterSlice';
import css from '../Style.module.css';

export default function OldContactList() {
  const contacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();

  function handleDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
