import React from "react";
import label from "../assets/label.png";
import { observer } from "mobx-react";
import { ticketsType } from "../interface/interface";
import Modal from "./Modal";

interface ticket {
  ticket: ticketsType;
}

export default observer(({ ticket }: ticket) => {
  return (
    <div className="ticket_block">
      <div className="button-block">
        <img className="label" src={label} alt="label" />
        <button onClick={() => Modal()}>
          <div>Buy for:</div>
          <div>
            {ticket.cost ? ticket.cost : ticket.price}{" "}
            {ticket.val ? ticket.val : "RUB"}
          </div>
        </button>
      </div>
      <div className="info-block">
        <div>
          <p className="time">{ticket.departure_time}</p>
          <span className="city">
            {ticket.origin}, {ticket.origin_name}
          </span>
          <span className="date">{ticket.departure_date}</span>
        </div>

        <div className="line">
          <span>Transfer: {ticket.stops}</span>
        </div>

        <div>
          <p className="time">{ticket.arrival_time}</p>
          <span className="city">
            {ticket.destination_name}, {ticket.destination}
          </span>
          <span className="date">{ticket.arrival_date}</span>
        </div>
      </div>
    </div>
  );
});
