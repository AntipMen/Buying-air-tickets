import React, { useEffect } from "react";
import Options from "../components/Options";
import Tickets from "../components/Tickets";
import { ticketsType } from "../interface/interface";
import { observer } from "mobx-react";
import Example from "../stores/mobXStore";

export default observer(() => {
  const { filteredTickets, sortingTickets } = Example;

  useEffect(() => {
    sortingTickets();
  }, []);

  return (
    <div className="main">
      <Options />
      <div className="col tickets">
        {filteredTickets.map((ticket: ticketsType) => {
          return <Tickets ticket={ticket} />;
        })}
      </div>
    </div>
  );
});
