import React from 'react';

import Header from 'components/common/Header';
import ToDoList from 'components/todo-list/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
