const checkBooking = (arrivals, departures, k) => {
  const events = new Map();

  for (let i = 0; i < arrivals.length; i++) {
    const arrival = arrivals[i];
    const departure = departures[i];

    let current = events.get(arrival);
    events.set(arrival, current === undefined ? 1 : current + 1);

    current = events.get(departure);
    events.set(departure, current === undefined ? -1 : current - 1);
  }

  const sortedEvents = new Map(
    [...events.entries()].sort((a, b) => a[0] - b[0])
  );

  let count = 0;
  for (const [key, value] of sortedEvents) {
    count += value;

    if (count > k) {
      return false;
    }
  }

  return true;
};

export default checkBooking;

/*
  Time Complexity: O(n Log n)
  Auxiliary Space: O(n)
 */
