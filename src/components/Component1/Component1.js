import React from 'react';
import './Component1.css';

function Component1(){
    return (

        <li className="com-1-flex-item rounded">
          <p className='com-1-firstField'>Gratulacje Jakub! <i class="fa fa-smile-o"></i></p>
          <div className='com-1-divForText'>
          <p>Zrobiłeś dzisiaj na prawdę dużo. Zdobyłeś nowe odznaki. Sprawdź je klikając w poniższy przycisk.</p>
          <img class="com-1-picClass2" src="11111.png"></img>
          </div>
          <button class="com-1-button">Sprawdź odznaki</button>
        </li>

       )
}

export default Component1;