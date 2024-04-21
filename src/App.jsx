// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import SearchBox from './components/search-box/SearchBox';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
// import userData from './components/data/user-data.json';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  // const [users, setUsers] = useState(() => {
  //   const savedUsers = window.localStorage.getItem('users');
  //   if (savedUsers !== null) {
  //     return JSON.parse(savedUsers);
  //   }
  //   return userData;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  // const users = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filters.name);

  // const [filter, setFilter] = useState('');

  // const filteredUsers = users.filter(user => {
  //   const filteredByName = user.name
  //     .toLowerCase()
  //     .includes(filter.toLowerCase());
  //   const filteredByNumber = user.number
  //     .toLowerCase()
  //     .includes(filter.toLowerCase());
  //   return filteredByName || filteredByNumber;
  // });

  // const addUser = newUser => {
  //   const action = {
  //     type: 'contacts/addUser',
  //     payload: newUser,
  //   };
  //   dispatch(action);
  //   // setUsers(prevUsers => {
  //   //   return [...prevUsers, newUser];
  //   // });
  // };

  // const removeUser = userId => {
  //   const action = {
  //     type: 'contacts/removeUser',
  //     payload: userId,
  //   };
  //   dispatch(action);
  //   // setUsers(allUsers => {
  //   //   return allUsers.filter(user => user.id !== userId);
  //   // });
  // };

  // const handleFilterUsers = event => {
  //   const newFilter = event.target.value;
  //   const action = {
  //     type: 'filters/filteredUser',
  //     payload: newFilter,
  //   };
  //   dispatch(action);
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
