import React from 'react';
import {List, Span, Item, Btn} from './ContactList.styled'

const ContactList = ({ contacts,  onDeleteContact}) => {


  return (
    <List>
      {contacts.map(({id, number, name}) => (
        
        <Item key={id}>
              <Span></Span>
          {name}: {number}
          <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
