import React from 'react';

function Dropdown ({items,onChange,item,disabled,tuning}) {
    let hasTunings = tuning && items.length
    return (
        <select onChange={e => onChange(e.target.value)} className="Dropdown" value={item}>
            {tuning && <option hidden value="">{hasTunings === 0 ? "Save A New Tuning":"Select A Tuning"}</option>}
          {items.map((val,i) => (
              <option key={i} value={val}>{val}</option>
          ))}
        </select>
    );
}

export default Dropdown;