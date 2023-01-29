import React from 'react'
import Htab from './Htab';
import { AiFillCaretRight} from 'react-icons/ai';
import './Htab_List.css';

const Htab_List= ({heading, data}) => {
    return (
        <div className="htab_list">
            <div className="htab_list-heading">
                <p>{heading}</p>
                <button type='button'>
                    <AiFillCaretRight color="black" size={20} />
                </button>
            </div>
            { data.slice(0, 5).map((user,i) => {
                return (
                    <Htab 
                        symbol= {data[i].symbol}
                        name={data[i].name} 
                        market_price={data[i].market_price} 
                        change_percent={data[i].change_percent}
                    />
                ); 
            })}
        </div>
    );
}

export default Htab_List
