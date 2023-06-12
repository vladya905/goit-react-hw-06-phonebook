import { useDispatch, useSelector } from 'react-redux';
import { filterChange, selectFilter } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import React from 'react';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
    
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;