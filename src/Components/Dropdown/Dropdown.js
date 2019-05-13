import React from 'react';

function Dropdown ({items,onChange,item}) {
    return (
        <select onChange={e => onChange(e.target.value)} className="Dropdown" value={item}>
          {items.map((val,i) => (
              <option key={i} value={val}>{val}</option>
          ))}
        </select>
    );
}

export default Dropdown;