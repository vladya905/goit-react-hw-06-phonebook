import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { contactsFilter, selectFilter } from '../../redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(contactsFilter(event.target.value));
  };

  return (
    <div>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}



export default Filter;