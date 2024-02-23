import React, { useEffect, useState } from 'react';

import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'

const DefaulContactstArray = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
    
const App = () => {
  const [contacts, setContacts] = useState(DefaulContactstArray);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    const isContactExist = contacts.some(contact => contact.name === name);
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const handleSearch = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};


export default App




























// import React, { useEffect, useState } from 'react';

// import { nanoid } from 'nanoid'
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList'

// const DefaulContactstArray = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
    
// const App = () => {
//   const [contacts, setContacts] = useState(DefaulContactstArray)
//   const [filter, setFilter] = useState('')
  

//   useEffect(() => {
//     const savedContact = JSON.parse(localStorage.getItem("contacts"));
//     if (savedContact) {
//       setContacts({ savedContact });
//     }
//   }, []
//   )

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);


// const handleAddContact = (name, number) => {
//     const newContact = {
//       id: nanoid(),
//       name: name.trim(),
//       number: number.trim(),
//     };
//     const isContactExist = contacts.some(
//       contact => contact.name === name);
//     if (isContactExist) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     setContacts(prev => [...prevСontacts, newContact],
//     );
//   };

//   const handleSearch = e => {
//     setFilter(e.target.value.toLowerCase().trim() );
//   };

//   const handleDeleteContact = id => {
//     setContacts(prev => prev.filter(contact => contact.id !== id))
//     };
  
  
//     const filteredContacts = filter
//       ? contacts.filter(item => item.name.toLowerCase().includes(filter))
//       : contacts;
  
//   return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={handleAddContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={handleSearch} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={handleDeleteContact}
//         />
//       </div>
//     );
//   };

  





// export default App



  















    
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.handleAddContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.handleSearch} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   };
// }
