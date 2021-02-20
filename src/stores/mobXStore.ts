import { action, makeObservable, observable, reaction } from "mobx";
import { ticketsType } from "../interface/interface";
import tickets from "../api/tickets";

class Example {
  constructor() {
    makeObservable(this);
    reaction(
      () => this.filters.length,
      () => {
        this.stopsFilter();
        this.sortingTickets();
      }
    );
  }

  @observable initialValue: ticketsType[] = tickets.tickets;
  @observable filters: number[] = [];
  @observable filteredTickets: ticketsType[] = tickets.tickets;

  @action actionChangePrice = (coefficient: number, val: string) => {
    this.filteredTickets = this.initialValue.map((value) => ({
      ...value,
      cost: value.price * coefficient,
      val,
    }));
    this.initialValue = this.initialValue.map((value) => ({
      ...value,
      cost: value.price * coefficient,
      val,
    }));
  };

  @action actionStops = (num: number) => {
    if (this.filters.includes(num)) {
      this.filters = this.filters.filter((element) => element !== num);
    } else {
      this.filters.push(num);
    }
  };

  @action stopsFilter = () => {
    if (this.filters.length === 0) {
      this.filteredTickets = this.initialValue;
    } else {
      this.filteredTickets = this.initialValue.filter((element) =>
        this.filters.includes(element.stops)
      );
    }
  };

  @action sortingTickets = () => {
    this.filteredTickets = this.filteredTickets.sort(
      (a: ticketsType, b: ticketsType) => {
        if (a.cost) {
          //@ts-ignore
          return a.cost - b.cost;
        } else {
          return a.price - b.price;
        }
      }
    );
  };
}

export default new Example();
