import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { selectFilter, selectUser } from '../../redux/selectors';

const ContactList = () => {
  const users = useSelector(selectUser);
  const filter = useSelector(selectFilter);

  const filteredUsers = users.filter(user => {
    const filteredByName = user.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    const filteredByNumber = user.number
      .toLowerCase()
      .includes(filter.toLowerCase());
    return filteredByName || filteredByNumber;
  });

  return (
    <>
      <div className={css.contactList}>
        {filteredUsers.map(user => {
          return <Contact user={user} key={user.id} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
