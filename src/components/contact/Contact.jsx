import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const removeUser = userId => {
    const action = deleteUser(userId);
    dispatch(action);
    // setUsers(allUsers => {
    //   return allUsers.filter(user => user.id !== userId);
    // });
  };
  return (
    <div className={css.contactItem}>
      <div>
        <p>
          <FaPhoneAlt /> {user.name}
        </p>
        <p>
          <IoPerson /> {user.number}
        </p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => removeUser(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
