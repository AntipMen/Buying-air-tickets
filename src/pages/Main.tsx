import React from "react";
import Options from "../components/Options";
import Tickets from "../components/Tickets";
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
            <div className="col tickets">{sortSelect.map((ticket: ticketsType) => <Tickets
                price={ticket.price}
                cost={ticket.cost}
                val={ticket.val}
                stops={ticket.stops}
                dTime={ticket.departure_time}
                dDate={ticket.departure_date}
                aTime={ticket.arrival_time}
                aDate={ticket.arrival_date}
                origin={ticket.origin}
                name={ticket.origin_name}
                destination={ticket.destination}
                dName={ticket.destination_name}
                carrier={ticket.carrier}/>)}</div>
        </div>
    )
}
