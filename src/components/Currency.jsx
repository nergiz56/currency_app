import React from "react";
import '../css/currency.css';
import { FaLongArrowAltRight } from "react-icons/fa";


function Currency(){
    return (
        <div className='currency-div'>
            <input type="number" className="amount"/>
            <select className="from-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
            </select>
            <FaLongArrowAltRight style={{color: '#fff', fontSize:'30px', marginRight: "10px"}} />

            <select className="to-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
            </select>
            <input type="number" className="result" />
        </div>
    )
}

export default Currency