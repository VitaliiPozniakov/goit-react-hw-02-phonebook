import { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {
    // console.log(name, number)

    const contact = {
      id: nanoid(10),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = (evt) => {
this.setState({filter: evt.currentTarget.value})
  }

getVisibleContacts = () => {
  const {contacts, filter} = this.state
  const normalizedFilter = filter.toLowerCase()
   return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )
}

  render() {
const visibleContacts = this.getVisibleContacts()
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitProp={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
