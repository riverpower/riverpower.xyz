import React from 'react';
import logo from '../../logo.png';

class Home extends React.Component {
  render(){
    return(
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h3 style={{ paddingTop:'12px'}}>
        <i style={{  color:'#e95950' }}  className="fab fa-instagram"></i>
      </h3>
      <h3 style={{ paddingTop:'12px'}}>
        <i style={{  color:'#4267b2' }} className="fab fa-facebook-square"></i>
      </h3>
      <h3 style={{ paddingTop:'12px'}}>
        <i style={{  color:'#2fc2ef' }}  className="fab fa-twitter"></i>
      </h3>        
      </header>
    </div>
    );
  }
}

export default Home;
