import React from 'react';
import {List, Item} from './ContactList.styled'

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
