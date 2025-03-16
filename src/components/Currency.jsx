import React, { useState } from "react";
import '../css/currency.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_VGPKoVxFsM36W44m4Hz3DiEKsBaizTQLGvNrA4Je";

function Currency() {


    const [amount, setAmount] = useState(''); // Başlangıç boş string
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(''); // Başlangıç boş string


    //toFixed(2) -> işlevş noktadan sonra iki basamak görünmesini sağlar.

    const exchange = async ()=>{
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2) ;
        setResult(result);

    }

    return (
        <div className='currency-div'>
            <div>
                <h3 className="currency-title">
                    DÖVİZ KURU UYGULAMASI
                </h3>
            </div>
            
            <div className="currency-input-row">
                <input value={amount} onChange={(e) => setAmount(e.target.value)}  type="number" className="amount" />

                <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaLongArrowAltRight className="arrow-icon" />

                <select onChange={(e) => setToCurrency(e.target.value)}   className="to-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <input type="number" className="result" value={result} onChange={(e) => setResult(e.target.value)} />
            </div>

            <div>
                <button onClick={exchange} className="exchange-button">Çevir</button>
            </div>
        </div>
    );
}

export default Currency;