import React, { useState } from 'react';

import {
  Form,
  FormDiv,
} from './ContactForm.styled';




const ContactForm = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };


  return (
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          {' '}
          Name
          <input type="text" name="name" required value={name} onChange={handleChange}
          />
        </FormDiv>
        <FormDiv>
          {' '}
          Number
          <input type="tel" name="number" required value={number} onChange={handleChange}
          />
        </FormDiv>
        <button type="submit">Add contact</button>
      </Form>
    );
  }


  export default ContactForm







//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact(name, number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormDiv>
//           {' '}
//           Name
//           <input type="text" name="name" required value={this.state.name} onChange={this.handleChange}
//           />
//         </FormDiv>
//         <FormDiv>
//           {' '}
//           Number
//           <input type="tel" name="number" required value={this.state.number} onChange={this.handleChange}
//           />
//         </FormDiv>
//         <button type="submit">Add contact</button>
//       </Form>
//     );
//   }
// }



