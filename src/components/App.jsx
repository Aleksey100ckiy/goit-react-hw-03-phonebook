import React, { Component } from "react";
import { FormField } from './FormField/FormField'
import ContactList from "./ContactList/ContactList";
import FindField from "./FindField/FindField";

export class App extends Component {

  state = {
  contacts: [],
  filter: '',
  }
  
  addContact = newContact => {
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
        
      }
    });

  }
  deleteContact = (contactId) => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  }

  handleChanging = evt => {

  this.setState({filter: evt.target.value})
  }

  filterBook = () => {
    const contactsArr = this.state.contacts;
    const findEl = this.state.filter;
    const filterEl = contactsArr.filter(contact => contact.name.toLowerCase().includes(findEl));
    return filterEl;
  }
  
  render() {
    const memoryState = this.state.contacts;
    const filterEl = this.filterBook();
    return (
      <div>
        <FormField contArr={this.state.contacts} onSubmit={this.addContact}></FormField> 
        <FindField value={this.state.filter} onChange={this.handleChanging}></FindField>
        {(memoryState.length > 0) ? <ContactList onDelete={this.deleteContact } contactsList={ filterEl ? filterEl : memoryState} ></ContactList> :
        <p>Contacts</p>}
      </div>
    )}
};

