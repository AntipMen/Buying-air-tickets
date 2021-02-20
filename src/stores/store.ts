import { createStore } from "redux";
import tickets from "../api/tickets";
import { ticketsType } from "../interface/interface";

const initialState: ticketsType[] = tickets.tickets;

let filters: number[] = [];

const ticketsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "PRICE":
      return initialState.map((element) => {
        return {
          ...element,
          cost: element.price * action.args,
          val: action.val,
        };
      });
      break;
    case "STOPS":
      return initialState.filter((element) => filters.includes(element.stops));
      break;
    case "ALL":
      return initialState;
  }

  return initialState;
};
//@ts-ignore
export const store: any = createStore(ticketsReducer);

export const actionChangePrice = (coefficient: number, val: string) => {
  return { type: "PRICE", args: coefficient, val };
};

export const actionStops = (num: number) => {
  if (filters.includes(num)) {
    filters = filters.filter((element) => element !== num);
  } else {
    filters.push(num);
  }
  if (filters.length === 0) {
    return { type: "ALL" };
  }

  return { type: "STOPS", filters };
};

export const actionAllStops = () => {
  return { type: "ALL" };
};
