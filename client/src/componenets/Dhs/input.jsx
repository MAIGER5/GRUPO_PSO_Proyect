import React, { useState } from 'react';


export const InputAdd = () => {
    const [inputList, setInputList] = useState([]);

    const agregarInput = () => {
      setInputList([...inputList, '']);
    };
  
    return (
      <div>
        <button onClick={agregarInput}>+</button>
        <div>
          {inputList.map((input, index) => (
            <input type="text" key={index} />
          ))}
        </div>
      </div>
    );
  
}
