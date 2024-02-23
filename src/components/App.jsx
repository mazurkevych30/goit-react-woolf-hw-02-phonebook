import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    if (
      this.state.contacts.find(
        ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    this.setState(prev => ({ contacts: [...prev.contacts, { id, ...data }] }));
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState(prev => ({ contacts: prev.contacts, [name]: value }));
    console.log(this.state);
  };

  handleDelete = id => {
    console.log(id);
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  findContact = () => {
    const matchContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
    return matchContacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.findContact()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
