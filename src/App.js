import './App.css';
import React from 'react';
import CharacterCounter from './components/CharacterCounter'
import TodoList from './components/TodoList';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      ------------------------ CharacterCounter demo ----------------------------------------
      <br />
      <CharacterCounter />
      <br />
      ------------------------------ TodoList demo --------------------------------------------
      <br />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
