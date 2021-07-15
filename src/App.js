import './App.css';
import React from 'react';
import CharacterCounter from './components/CharacterCounter'

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      ------------------------ CharacterCounter demo ----------------------------------------
      <br />
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
