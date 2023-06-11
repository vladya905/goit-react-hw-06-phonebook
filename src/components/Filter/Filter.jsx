import  PropTypes  from 'prop-types';
import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};


export default Filter;