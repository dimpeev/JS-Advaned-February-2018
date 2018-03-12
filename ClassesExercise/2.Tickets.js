function ticketsDatabase(ticketsDescription, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static compareTo(ticket1, ticket2, criteria) {
            if (criteria === "price") {
                return ticket1[criteria] - ticket2[criteria];
            }
            return ticket1[criteria] > ticket2[criteria];
        }

    }

    let tickets = [];
    for (let ticket of ticketsDescription) {
        let [destination, price, status] = ticket.split("|");
        tickets.push(new Ticket(destination, Number(price), status));
    }

    tickets.sort((a, b) => Ticket.compareTo(a, b, sortCriteria));

    return tickets;
}

let sortedArray = ticketsDatabase(["Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed"],
    "destination"
);
console.log(sortedArray);

sortedArray = ticketsDatabase(["Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed"],
    "price"
);

console.log(sortedArray);