import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { filteredContact } from '../../redux/actions';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterUsers = event => {
    const newFilter = event.target.value;
    const action = filteredContact(newFilter);
    dispatch(action);
  };

  return (
    <div className={css.searchBoxLabelInput}>
      <label>
        <p>Find contacts by name</p>
        <input
          className={css.searchBoxInput}
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterUsers}
        />
      </label>
    </div>
  );
};

export default SearchBox;
