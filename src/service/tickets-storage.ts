import { getSearchId, getTickets } from "./api";

let tickets: any[] = [];
let CURRENT_COUNT = 5;

export function getTicketsRange(start: number) {
  let end = start + CURRENT_COUNT;
  let list = tickets.slice(start, end);

  return list;
}

export async function getTicketList() {
  try {
    let { searchId } = await getSearchId();
    let data = await getTickets(searchId);

    if (data.tickets && !tickets.length) {
      tickets = [...data.tickets];
    }

    return sortByPrice();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function sortByPrice() {
  tickets.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });

  return tickets.slice(0, CURRENT_COUNT);
}

export function sortByDuration() {
  tickets.sort((a, b) => {
    let [{ duration: aForwardDuration }, { duration: aOppositeDuration }] =
      a.segments;
    let [{ duration: bForwardDuration }, { duration: bOppositeDuration }] =
      b.segments;

    let aDuration = aForwardDuration + aOppositeDuration;
    let bDuration = bForwardDuration + bOppositeDuration;

    if (aDuration > bDuration) return 1;
    if (aDuration < bDuration) return -1;
    return 0;
  });

  return tickets.slice(0, CURRENT_COUNT);
}

export function sortByOptimal() {
  tickets.sort((a, b) => {
    let a_all =
      a.price + a.segments.reduce((acc: any, i: any) => (acc += i.duration));
    let b_all =
      b.price + b.segments.reduce((acc: any, i: any) => (acc += i.duration));

    if (a_all > b_all) return 1;
    if (a_all < b_all) return -1;
    return 0;
  });

  return tickets.slice(0, CURRENT_COUNT);
}

export function filterByCountStops(filter: number[]) {
  console.log("count", filter);
  return tickets
    .filter((item) => {
      let [{ stops: forwardStops }, { stops: backwardStops }] = item.segments;

      return (
        filter.includes(forwardStops.length) &&
        filter.includes(backwardStops.length)
      );
    })
    .slice(0, CURRENT_COUNT);
}
