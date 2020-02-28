import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/ui/Header';
import ToDoListContainer from 'components/todo-list/ToDoListContainer';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <ToDoListContainer />
      <ToastContainer />
    </div>
  </div>
);

export default App;
