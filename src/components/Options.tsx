import React, { useState } from "react";
import { actionAllStops } from "../stores/store";
import { useDispatch } from "react-redux";
import Example from "../stores/mobXStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";

export default observer(() => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const { filters, filteredTickets, actionChangePrice, actionStops } = Example;

  return (
    <div className="col options">
      <div className="options_block">
        <div className="text">Currency</div>
        <div className="btn-currency">
          <div className={selected === "RUB" ? "btn-select" : ""}>
            <a
              onClick={() => {
                setSelected("RUB");
                actionChangePrice(0, "RUB");
              }}
            >
              RUB
            </a>
          </div>
          <div className={selected === "USD" ? "btn-select" : ""}>
            <a
              onClick={() => {
                setSelected("USD");
                actionChangePrice(28, "USD");
              }}
            >
              USD
            </a>
          </div>
          <div className={selected === "EUR" ? "btn-select" : ""}>
            <a
              onClick={() => {
                setSelected("EUR");
                actionChangePrice(30, "EUR");
              }}
            >
              EUR
            </a>
          </div>
        </div>

        <div className="transfers">
          <div className="text">Number of transfers</div>
          <div>
            <input
              type="checkbox"
              id="checkbox-id"
              onChange={() => dispatch(actionAllStops())}
            />
            <label form="checkbox-id"></label>
            <p>All</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox-id"
              onChange={() => actionStops(0)}
            />
            <label form="checkbox-id"></label>
            <p>0 Transfer</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox-id"
              onChange={() => actionStops(1)}
            />
            <label form="checkbox-id"></label>
            <p>1 Transfer</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox-id"
              onChange={() => actionStops(2)}
            />
            <label form="checkbox-id"></label>
            <p>2 Transfers</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox-id"
              onChange={() => actionStops(3)}
            />
            <label form="checkbox-id"></label>
            <p>3 Transfers</p>
          </div>
        </div>
      </div>
    </div>
  );
});
