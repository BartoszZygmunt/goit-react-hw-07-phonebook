import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/operations';
import css from './ContactForm.module.css';

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
    <div className={css['form-wrapper']}>
      <form>
        <div className={css[`label-input`]}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={contact.name}
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </div>
        <div className={css[`label-input`]}>
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={contact.number}
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
