import React from 'react';
import Nav from '../components/Nav';


const MainLayout = (props) => {
  return (
    <div className="wrapper">
      
      <div className="container">
      <Nav />
      {props.children}
      </div>
    </div>  
  );
}

export default MainLayout; 