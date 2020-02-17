import React from 'react';

import Header from 'components/ui/Header';
import ToDoListContainer from 'components/todo-list/ToDoListContainer';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <ToDoListContainer />
    </div>
  </div>
);

export default App;
