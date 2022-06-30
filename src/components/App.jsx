import { Component } from 'react';
import ContactForm from './ContactForm';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

formSubmitHandler = (data) =>{
console.log(data)
}

  render() {

    return (
      <div>
        <h1>
          Phonebook
        </h1>
        <ContactForm onSubmitProp={this.formSubmitHandler}/>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;