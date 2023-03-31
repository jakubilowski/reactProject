import React from 'react';
import './Component2.css';

function Component2(){
    return (
        <li className="com-2-flex-item rounded">
            <div className='parentDiv'>
            <span class="icon1">
            <i class="fa fa-clock-o fa-2x com-2-iclass" aria-hidden="true"></i>
            </span>
            <span class="icon2">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
            </div>
            <div>
                <h5>Profit</h5>
                <h4>$12,628</h4>
                <span className='com-2-span'><i class="fa fa-arrow-up" aria-hidden="true"></i> +72,31%</span>
            </div>
        </li>  
       )
}

export default Component2;