import React from 'react';

function Dropdown ({items,onChange,item,disabled,tuning}) {
    console.log()
    return (
        <select onChange={e => onChange(e.target.value)} className="Dropdown" value={item}>
            {tuning && <option hidden value="">{items.length === 0 ? "Save A New Tuning":"Select A Tuning"}</option>}
          {items.map((val,i) => (
              <option key={i} value={val}>{val}</option>
          ))}
        </select>
    );
}

export default Dropdown;