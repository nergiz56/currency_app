import React from "react";
import '../css/currency.css';
import { FaLongArrowAltRight } from "react-icons/fa";

function Currency() {
    return (
        <div className='currency-div'>
            <div>
                <h3 className="currency-title">
                    DÖVİZ KURU UYGULAMASI
                </h3>
            </div>
            
            <div className="currency-input-row">
                <input type="number" className="amount" />

                <select className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <FaLongArrowAltRight className="arrow-icon" />

                <select className="to-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <input type="number" className="result" />
            </div>

            <div>
                <button className="exchange-button">Çevir</button>
            </div>
        </div>
    );
}

export default Currency;