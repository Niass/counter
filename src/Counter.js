import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  // function  (e) {
  //   console.log(e.target.value)
  //   return e.target.value;
  // }
  const [count, setCount] = useState('');
  function handleChange(e){
    setCount(Number(e.target.value) ?Number(e.target.value):"")
  }

  return (
    <div>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <p></p>
      <label for="init">Valeur de départ du compteur: </label>
      <input id="init" onChange={handleChange} type="text" />
    </div>
  );
}

export default Counter;
