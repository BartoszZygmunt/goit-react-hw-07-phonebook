import { getIsLoading, getError } from '../Redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../Redux/operations';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      {!isLoading && <ContactList />}
    </>
  );
};
