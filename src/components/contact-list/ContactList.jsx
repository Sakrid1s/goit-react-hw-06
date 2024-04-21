import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { selectFilter, selectContact } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact => {
    const filteredByName = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    const filteredByNumber = contact.number
      .toLowerCase()
      .includes(filter.toLowerCase());
    return filteredByName || filteredByNumber;
  });

  return (
    <>
      <div className={css.contactList}>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
