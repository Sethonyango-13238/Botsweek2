import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

function SortBar({ onSort }) {
  const [sortType, setSortType] = useState('health');

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div>
      <select value={sortType} onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

    </div>
  );
}

export default SortBar;