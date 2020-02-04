import React from 'react';
import "./Dashboard.css"

const Card = ({type}) => {
    
    return ( 
        <div className="">
            <div className="counter card shadow rounded">
            <div className="card-counter primary" >
                <i className="fa fa-sm fa-users d-flex justify-content-start"></i>
                <span className="count-numbers">12</span>
                <span className="count-name">Customers</span>
            </div>
            </div>
        </div>
     );
}
 
export default Card;