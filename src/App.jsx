import SearchBox from './components/search-box/SearchBox';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import './App.css';

function App() {
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
