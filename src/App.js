import React from 'react';
import Layout from './Components/Layout/Layout'
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder'

function App() {
  return (
    <div className="App">
    <Layout>
        <BurgerBuilder />  
        {/* <h3>passing value from app to layout</h3> */}
    </Layout>
    </div>
  );
}

export default App;
