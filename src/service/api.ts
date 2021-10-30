export function getSearchId() {
  return fetch("https://front-test.beta.aviasales.ru/search").then((res) =>
    res.json()
  );
}

export function getTickets(searchId: string) {
  return fetch(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
  ).then((res) => res.json());
}
