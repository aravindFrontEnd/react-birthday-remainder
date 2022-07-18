import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data);

  const clearPeople = () =>{

    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
        <h3> <span className='bold'>{people.length}</span> birthdays 🎉today</h3>
        <List people={people} />
        <button onClick={clearPeople}>Dismiss All</button>
      </section>
    </main>
  )
}

export default App;
