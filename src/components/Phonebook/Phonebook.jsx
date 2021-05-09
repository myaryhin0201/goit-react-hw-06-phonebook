import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm/';
import Filter from '../Filter';

const Phonebook = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default Phonebook;
