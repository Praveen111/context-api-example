import React from 'react';
import Context from '../../Context/productsContext';
import './list.scss';

function List(props) {
  return (
    <div className="main-container">
     <div className="filter-container">
          Hello
     </div>
     <div className="list-container">
     <Context.Consumer>
       {
         value => {
           return value.products.map((v,i) => 
           <div key={i} className="card">
             <img src={v.image} alt={v.name} style={{width:"25%"}} />
             <div className="container">
               <h4>{v.name}</h4>
               <button className="add-button" onClick={(e) => value.addToCart(v)}>Add To Cart</button>
             </div>       
           </div>
           
           )
         }
        
       }
     </Context.Consumer>
     </div>
    
    </div>
  );
}

export default List;
