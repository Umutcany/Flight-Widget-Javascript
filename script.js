const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08.11",
    destination: "ISTANBUL",
    flight: "OX.203",
    gate: "A.01",
    remars: "ON TIME",
  },
  {
    time: "09.11",
    destination: "FRANKFURT",
    flight: "OX.203",
    gate: "A.02",
    remars: "ON TIME",
  },
  {
    time: "10.11",
    destination: "DUBAI",
    flight: "OX.205",
    gate: "A.07",
    remars: "DELAYED",
  },
  {
    time: "15:08",
    destination: "TOKYO",
    flight: "OX.207",
    gate: "A.15",
    remars: "CANCELLED",
  },
  {
    time: "05.05",
    destination: "NEW YORK",
    flight: "OX.201",
    gate: "A.23",
    remars: "DELAYED",
  },
];

const destinations = [
  "TOKYO",
  "FRANKFURT",
  "DUBAI",
  "ISTANBUL",
  "LONDON",
  "NEW YORK",
  "BERLIN",
];

const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }

      tableRow.appendChild(tableCell);
    }

    tableBody.append(tableRow);
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGĞHİJKLMRNOÖPRSŞTYUÜVYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
}

function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }

  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }

  if (hour < 10) {
    displayHour = "0" + hour;
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      "" +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      "" +
      generateRandomNumber() +
      generateRandomNumber(),
    remars: remarks[Math.floor(Math.random() * remarks.length)],
  });

  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffleUp, 5000);
