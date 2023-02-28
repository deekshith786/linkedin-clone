import React from 'react';
import './App.css';
import Feed from './feed/Feed';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/** widgets */}
        </div>
    </div>
  );
}

export default App;
