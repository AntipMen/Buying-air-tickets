import React, {useState} from "react";
import label from '../assets/label.png'
import {Modal} from "./Modal";

interface ticket {
    price: number,
    cost: number | undefined,
    val: string | undefined,
    stops: number,
    dTime: string,
    dDate: string,
    aTime: string,
    aDate: string,
    origin: string | number,
    name: string
    destination: string,
    dName: string,
    carrier?: string

}

export default ({price, cost, val, stops, dTime, dDate, aTime, aDate, origin, name, destination, dName,                }: ticket) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <div className="ticket_block">
                <div className="button-block">
                    <img className="label" src={label} alt="label"/>
                    <button onClick={() => setModalActive(true)}>
                        <div>Buy for:</div>
                        <div>{cost ? cost : price} {val ? val : 'RUB'}</div>
                    </button>
                </div>
                <div className="info-block">
                    <div>
                        <p className="time">{dTime}</p>
                        <span className="city">{origin}, {name}</span>
                        <span className="date">{dDate}</span>
                    </div>

                    <div className="line">
                        <span>Transfer: {stops}</span>
                    </div>

                    <div>
                        <p className="time">{aTime}</p>
                        <span className="city">{dName}, {destination}</span>
                        <span className="date">{aDate}</span>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </>
    )
}
