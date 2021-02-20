import React, {useState} from "react";
import {actionAllStops, actionChangePrice, actionStops} from "../stores/store";
import {useDispatch} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');

    return (
        <div className="col options">
            <div className="options_block">
                <div className="text">Currency</div>
                <div className="btn-currency">
                    <div className={selected === 'RUB' ? "btn-select" : ''}>
                        <a onClick={() => {
                            setSelected('RUB');
                            dispatch(actionChangePrice(0, 'RUB'))
                        }}>RUB</a>
                    </div>
                    <div className={selected === 'USD' ? "btn-select" : ''}>
                        <a onClick={() => {
                            setSelected('USD');
                            dispatch(actionChangePrice(28, 'USD'))
                        }}>USD</a>
                    </div>
                    <div className={selected === 'EUR' ? "btn-select" : ''}>
                        <a onClick={() => {
                            setSelected('EUR');
                            dispatch(actionChangePrice(30, 'EUR'))
                        }}>EUR</a>
                    </div>
                </div>

                <div className="transfers">
                    <div className="text">Number of transfers</div>
                    <div>
                        <input type="checkbox" id="checkbox-id" onChange={() => dispatch(actionAllStops())}/>
                        <label form="checkbox-id"></label>
                        <p>All</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox-id" onChange={() => dispatch(actionStops(0))}/>
                        <label form="checkbox-id"></label>
                        <p>0 Transfer</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox-id" onChange={() => dispatch(actionStops(1))}/>
                        <label form="checkbox-id"></label>
                        <p>1 Transfer</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox-id" onChange={() => dispatch(actionStops(2))}/>
                        <label form="checkbox-id"></label>
                        <p>2 Transfers</p>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox-id" onChange={() => dispatch(actionStops(3))}/>
                        <label form="checkbox-id"></label>
                        <p>3 Transfers</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
