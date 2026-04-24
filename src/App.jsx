import React, { Component } from "react";
import { nanoid } from "nanoid";

import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

const CONTACTS_KEY = "phonebook_contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };


  componentDidMount() {
    const savedContacts = localStorage.getItem(CONTACTS_KEY);
    
    if (savedContacts) {
      try {
        const parsedContacts = JSON.parse(savedContacts);
        this.setState({ contacts: parsedContacts });
      } catch (error) {
        console.error("Помилка при читанні з localStorage: ", error);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    }
  }

  addContact = (newContactData) => {
    const { contacts } = this.state;
    const { name } = newContactData;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts!`);
      return; 
    }

    const newContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div style={{ padding: '20px' }}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        
        <ContactList 
          contacts={visibleContacts} 
          onDeleteContact={this.deleteContact} 
        />
      </div>
    );
  }
}

export default App;