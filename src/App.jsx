import React from 'react';

import { Provider } from 'react-redux';
import store from 'startup/redux';

import Header from 'components/common/Header';
import ToDoListContainer from 'components/todo-list/ToDoListContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Header />
          <ToDoListContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
