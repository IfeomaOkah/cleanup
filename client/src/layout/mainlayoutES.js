import React from 'react';
import ESNav from '../components/ESNav';


const mainlayoutES = (props) => {
  return (
    <>
      <ESNav />
      {props.children}
    </>  
  );
}

export default mainlayoutES; 