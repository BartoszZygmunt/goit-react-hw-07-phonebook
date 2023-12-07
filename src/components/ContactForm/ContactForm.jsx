import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/operations';
import './ContactForm.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(addContact({ name: contact.name, number: contact.number }));

      setContact(() => ({ ...INITIAL_STATE }));
    };

    document.querySelector('form').addEventListener('submit', handleSubmit);

    return () => {
      document
        .querySelector('form')
        .removeEventListener('submit', handleSubmit);
    };
  }, [contact, dispatch]);

  return (
    <div className="form-wrapper">
      <div className="label-main">Phone Book - asynchron version</div>
      <form>
        <div className="label-input">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            name="name"
            value={contact.name}
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label className="label" htmlFor="number">
            Number
          </label>
          <input
            className="input"
            type="tel"
            name="number"
            value={contact.number}
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </div>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
