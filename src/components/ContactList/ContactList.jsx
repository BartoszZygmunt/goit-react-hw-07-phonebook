import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../Redux/selectors';
import { deleteContact } from '../../Redux/operations';
import './ContactList.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id} className="list-li">
          {contact.name}: {contact.number}&nbsp;
          <button
            className="delete-btn"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
