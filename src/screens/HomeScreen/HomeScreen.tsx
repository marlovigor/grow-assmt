import React, { useEffect, useState } from "react";
import SearchBar from "../../components/molecules/SearchBar.tsx";
import EventCard from "../../components/organisms/EventCard.tsx";

interface Event {
  id: number;
  name: string;
  url: string;
  info: string;
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
  };
  images: {
    url: string;
  };
  _embedded: {
    venues: {
      name: string;
      city: {
        name: string;
      };
    }[];
  };
  lat: number;
  lng: number;
}

interface userInput {
  search: string;
}

const HomeScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<userInput>({ search: "" });
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const fetchEvents = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search.search}&apikey=${process.env.REACT_APP_API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newEvents = data._embedded.events.map((event) => ({
        ...event,
        latitude: event._embedded.venues[0].location.latitude,
        longitude: event._embedded.venues[0].location.longitude,
      }));
      setEvents(newEvents);
    } catch (error) {
      console.error("Error fetching events:", error.message);
      setErrorMessage('Error occurred while fetching events. Please try another artist.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowDetails = (id: number) => {
    console.log(id);
    setExpandedEventId(id === expandedEventId ? null : id);
  };

  useEffect(() => {
    fetchEvents();
  }, []);




  return (
    <div style={{ padding: 10, maxWidth: "80%", margin: "0 auto" }}>
      <div style={{ padding: 10, maxWidth: "90%", margin: "0 auto" }}>
        <SearchBar
          value={search.search}
          onChange={(e) => setSearch({ search: e.target.value })}
          onClick={() => fetchEvents()}
        />
      </div>
      {isLoading ? (
        <div style={{ fontSize:150 , color:'white', textAlign: "center", fontWeight: 30 }}>
          Loading...
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 30,
            minWidth: "400px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard
              key={`${event.id}-${event.name}`}
              title={event.name}
              text={event.info}
              url={event.url}
              date={event.dates?.start?.localDate}
              dateTime={event.dates?.start?.localTime}
              location={event._embedded?.venues[0]?.city?.name}
              image={event.images[0]?.url}
              showDetails={event.id === expandedEventId}
              onClick={() => handleShowDetails(event.id)}
              time={event.dates?.start?.localTime}
              info=""
              lat={event.lat}
              lng={event.lng}
                
                
              />
            ))
          ) : (
            <p style={{fontSize:50 , color:'white'}}>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
