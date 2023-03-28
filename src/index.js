import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddTodo from './Components/addTodo'
import TodoList from './Components/listTodo'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Components/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

//?Adding all elements together
const el = <div>
  <h1 className=' w-100 bg-dark p-4 text-light border-dark rounded-bottom'>Todo List App</h1>
  <Provider store={store}>
  <AddTodo/>
  <br/>
  <TodoList/>
</Provider>
</div>

root.render(el)


reportWebVitals(console.log);
