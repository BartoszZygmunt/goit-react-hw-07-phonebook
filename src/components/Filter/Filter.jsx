import { useDispatch } from 'react-redux';
import { filterContact } from '../../Redux/actions';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className="label-input">
      <label className="label" htmlFor="filter">
        Find Your contact here!
      </label>
      <input
        type="text"
        name="filter"
        placeholder="Find contact..."
        onChange={handleFilter}
      ></input>
    </div>
  );
};
