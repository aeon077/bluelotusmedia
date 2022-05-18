export async function getAllEvents() {
  const response = await fetch(
    'https://missinghistoryproject-default-rtdb.firebaseio.com/news.json'
  );
  const data = await response.json();

  const articles = [];

  for (const key in data) {
    articles.push({
      id: key,
      ...data[key],
    });
  }

  return articles;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((news) => news.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((news) => news.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((articles) => {
    const eventDate = new Date(articles.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
