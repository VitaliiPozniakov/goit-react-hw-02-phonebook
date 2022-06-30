import React from 'react';
import {List, Span, Item, Btn} from './ContactList.styled'

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        
        <Item key={contact.id}>
              <Span></Span>
          {contact.name}: {contact.number}
          <Btn>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
