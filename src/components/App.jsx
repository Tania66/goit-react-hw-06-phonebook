import OldContactForm from './ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import OldContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './Style.module.css'
import { filterContacts } from '../redux/contacts/selectors';

export const App = () => {
  const  contacts  = useSelector(filterContacts);

  return (

<div className={css.inner}>
  <h1 className={css.title}>Phonebook</h1>
  <OldContactForm />

  <h2 className={css.title}>Contacts</h2>
  <Filter />

  {contacts.length > 0 && <OldContactList />}

</div>




  );
};
