// data
const data = [
  {
    date: "26",
    month: "November",
    location: "Denver, CO, US",
    center: "Pepsi Center",
    time: "20:00",
  },
  {
    date: "28",
    month: "November",
    location: "Omaha, NE, US",
    center: "BOK Center",
    time: "20:00",
  },
  {
    date: "29",
    month: "November",
    location: "Tulas, OK, US",
    center: "Century Center",
    time: "20:00",
  },
  {
    date: "30",
    month: "November",
    location: "ST. Paul, MN, US",
    center: "Xcel Center",
    time: "20:00",
  },
  {
    date: "28",
    month: "December",
    location: "Omaha, NE, US",
    center: "BOK Center",
    time: "20:00",
  },
  {
    date: "29",
    month: "December",
    location: "Tulas, OK, US",
    center: "Century Center",
    time: "20:00",
  },
  {
    date: "30",
    month: "December",
    location: "ST. Paul, MN, US",
    center: "Xcel Center",
    time: "20:00",
  },
];

// Selecting the elements
const tabsInfoCont = document.querySelector(".tabs-info-container");
const tabsCont = document.querySelector(".tabs-container");

// Function to display the tabs
function displayTabs() {
  // creating the tab names
  const monthNames = data.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.month)) {
        acc.push(curr.month);
      }

      return acc;
    },
    ["all"]
  );

  const mappedTabs = monthNames
    .map((item) => {
      return `<button class="tab-name" data-id="${item}">${item}</button>`;
    })
    .join("");

  return mappedTabs;
}
tabsCont.innerHTML = displayTabs();

// Selcting the els after creating them
const tabNames = document.querySelectorAll(".tab-name");

// Function to display the events (tab-info-card)
function displayEventInfo(arr) {
  const mapped = arr.map((item) => {
    return `
                    <article class="tab-info-card">
                        <div class="dot"> </div>
                        <div class="line"></div>

                        <div class="event-info-container">
                            <p class="event-date">
                                ${item.month.slice(0, 3)} 
                                ${item.date}
                            </p>
                            <p class="event-location">${item.location}</p>
                            <div class="other-info">
                                <p class="event-center">
                                    <span class="location-dot-icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </span>
                                    ${item.center}
                                </p>
                                <p class="event-time">
                                    <span class="clock-icon">
                                        <i class="fa-solid fa-clock"></i>
                                    </span>
                                    ${item.time}
                                </p>
                            </div>
                        </div>

                        <button class="ticket-btn">Buy Ticket</button>
                    </article>`;
  });

  return mapped.join("");
}
tabsInfoCont.innerHTML = displayEventInfo(data);

// Event Listener
tabNames.forEach((tabName) => {
  tabName.addEventListener("click", function (e) {
    // filter the events
    const filteredEvents = data.filter((item) => {
      return item.month === e.currentTarget.dataset.id;
    });

    if (e.currentTarget.dataset.id === "all") {
      tabsInfoCont.innerHTML = displayEventInfo(data);
    } else {
      tabsInfoCont.innerHTML = displayEventInfo(filteredEvents);
    }
  });
});
