import React, { useState, useContext } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './header.scss'
import Context  from '../../Context/productsContext';
import Search from '../Search/Search';

function Header() {
  const [search,setSearch] = useState(false);
  const context = useContext(Context);
  console.log("Context",context)
  function onSearch(e) {
console.log("On search",e.target.value,context);
  }

  return (
    <div className="header">
     {/* <Context.Consumer>
       {
         value => {
           console.log("Value",value);
           return value.products.map(v => <div key={v.name}>{v.name}</div>)
         }
        
       }
     </Context.Consumer> */}
     <i className="fa fa-star-o" style={{fontSize:"36px"}}></i>
 
    <div className="search">
    {search && <Search onSearch={onSearch} />}
    <i className="fa fa-search" onClick={() =>setSearch(!search)} style={{fontSize:"36px",paddingLeft:"5px"}}></i>
    </div>
    
    <div className="cart">
    <i className="fa fa-shopping-cart" style={{fontSize:"36px"}}></i>
    <Context.Consumer>
      {value =>  <span className="indicator">{value.cartProducts.length}</span>}
    </Context.Consumer>
   
    </div>
    </div>
  );
}

export default Header;
