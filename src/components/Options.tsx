import React from "react";
import {actionAllStops, actionChangePrice, actionStops} from "../stores/store";
import {useDispatch} from "react-redux";

export default () => {
    const dispatch = useDispatch();

    return (
        <div className="options">
            <span>Currency</span>
            <div>
                <button onClick={() => dispatch(actionChangePrice(0, 'RUB'))}>RUB</button>
                <button onClick={() => dispatch(actionChangePrice(28, 'USD'))}>USD</button>
                <button onClick={() => dispatch(actionChangePrice(30, 'EUR'))}>EUR</button>
            </div>

            <div className="options_p">
                <div>
                    <input type="checkbox" onChange={() => dispatch(actionAllStops())}/>
                    <p>All</p>
                </div>
                <div>
                    <input type="checkbox" onChange={() => dispatch(actionStops(0))}/>
                    <p>0 пересадок</p>
                </div>
                <div>
                    <input type="checkbox" onChange={() => dispatch(actionStops(1))}/>
                    <p>1 пересадок</p>
                </div>
                <div>
                    <input type="checkbox" onChange={() => dispatch(actionStops(2))}/>
                    <p>2 пересадок</p>
                </div>
                <div>
                    <input type="checkbox" onChange={() => dispatch(actionStops(3))}/>
                    <p>3 пересадок</p>
                </div>


            </div>

        </div>
    )
}
