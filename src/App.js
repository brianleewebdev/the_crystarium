import React from 'react';
import './App.scss';
import ItemView from './ItemView';
import Header from './Header';

function App() {
  return (
    <div className="theCrystarium">
      <Header />
      <ItemView />
    </div>
  );
}

export default App;
