import { Component } from 'react';
import s from './App.module.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? contacts,
    filter: '',
    value: '',
  };
  addTodo = options => {
    const { name, number } = options;
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(
        prev => ({ contacts: [...prev.contacts, options] }),

      );
    }
  };
  componentDidUpdate(prevProps,prevState){
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };
  onFilter = e => {
    const { value } = e.target;
    this.setState(prev => ({ filter: value, value: value }));
  };

  onfilterContacts = () => {
    const { filter, contacts } = this.state;
    if (filter === '') return contacts;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { value } = this.state;
    const { addTodo, onFilter, onfilterContacts, removeContact } = this;
    return (
      <>
        <h1 className={s.titel}>Phonebook</h1>
        <ContactForm addTodo={addTodo} />
        <h2 className={s.titel}>Contacts</h2>
        <Filter filter={onFilter} value={value} />
        <ContactList contacts={onfilterContacts()} remove={removeContact} />
      </>
    );
  }
}

export default App;
