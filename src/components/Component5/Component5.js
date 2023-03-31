import React from 'react';
import './Component5.css';

function Component5(){
    return (
        <li className="com-5-flex-item">
            <div className='com-5-parentDiv'>
            <span class="com-5-icon1">
            <i class="fa fa-paypal fa-2x com-5-iclass" aria-hidden="true"></i>
            </span>
            <span class="com-5-icon2">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
            </div>
            <div>
                <h5>Zapłacono</h5>
                <h4>$2,456</h4>
                <span className='com-5-span'><i class="fa fa-arrow-down" aria-hidden="true"></i> +25,83%</span>
            </div>
        </li>  
       )
}

export default Component5;