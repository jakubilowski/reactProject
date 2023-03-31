import React from 'react';
import './imieNazwisko.css';

function ImieNazwisko(props){
    return <h1 className='myClass'>Jakub {props.surname}</h1>;
}

export default ImieNazwisko;