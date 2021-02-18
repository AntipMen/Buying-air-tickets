import React from "react";
import Options from "../components/Options";
import Tickets from "../components/Tickets";
import tickets from "../api/tickets";
import { useSelector} from 'react-redux';
import {ticketsType} from "../interface/interface";

export default () => {
    const select: any = useSelector((state) => state);
    const sortSelect: ticketsType[] = select.sort((a:ticketsType, b:ticketsType) => {
        if (a.cost) {
            //@ts-ignore
            return a.cost - b.cost;
        } else {
           return a.price - b.price;
        }

    })

    return (
        <div className="main">
            <Options/>
            <div className="ticket">{sortSelect.map((ticket: ticketsType) => <Tickets
                price={ticket.price} cost={ticket.cost} val={ticket.val} stops={ticket.stops}/>)}</div>
        </div>
    )
}
