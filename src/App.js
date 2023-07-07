import React, { useState } from 'react'

import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem';



function App() {

  const [items, setItems] = useState([]);

  const additems = (additems) => {
    setItems((pervItems) => {
      return [...pervItems, additems]

    });

  }

  const deleteitem = (id) => {

    setItems((pervItems) => {
      return pervItems.filter((item, index) => {
        return index !== id
      })
    });
  }
  console.log(items);
  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={additems} />
      <div>
        <ul>
          {
            items.map((item, index) => {
              return (
                <ToDoItem key={index} text={item} deleteitem={deleteitem} id={index} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
