import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
// import Welcome from './Components/Welcome/Welcome';
import Home from './Views/Home/Home';

function App() {
  return (
    <div className="App">
    
      <Header/>
      {/* <Welcome/> */}
      <main>
        <Home/>

      </main>
    </div>
  );
}

export default App;
