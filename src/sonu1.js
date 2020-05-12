import React from 'react';
import Worm from './Bform';

const MenuItemJSX = () => {
  return (
    <div className="menuitem">
      <span><a href="https://www.cornerbakerycafe.com/menu" target="_blank">MENU</a></span>
      <span><a href="https://www.cornerbakerycafe.com/catering" target="_blank">CATERING</a></span>
      <span><a href="https://www.nutritionix.com/corner-bakery-cafe/portal" target="_blank">NUTRITION</a></span>
      <span><a href="https://www.nutritionix.com/corner-bakery-cafe/portal" target="_blank">REWARDS</a></span>
      <span><a href="http://www.soccernet.com" target="_blank">Online order</a></span>
    </div>   
    );
}

function Sonu() {

  
  return (
    <div className="App">
      <div className="App-header"> 
        <div className="menucontainer">
          <div className="companytitle">
            <img src="logo1.jpg"height="30%"width="30%"></img>
          </div>
          <MenuItemJSX />
        </div>
              
        <div className="bodyimage">
          <div className="imageContainer">
            <img src="supercupcakes.jpg"height="259px"width="400px"></img>
            <img src="super macarons.jpg"height="259px"width="400px"></img>
            <img src="supercake.jpg"height="259px"width="400px"></img>
          </div>
          
          <Worm></Worm>
        </div>       
      </div>
    </div>
  );
}

export default Sonu;
