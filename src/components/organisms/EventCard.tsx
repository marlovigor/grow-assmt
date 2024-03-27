///create event card with event details and image

import React from "react";

import EventDetails from "../molecules/EventDetails.tsx";


interface Props {
    title: string;
    dateTime: string;
    date: string;
    time: string;
    info: string;
    location: string;
    image: string;
    text: string;
    url: string;
    showDetails: boolean;
    onClick: () => void;
  }
  
  const EventCard: React.FC<Props> = (props) => {
    return (
      <div style={{ marginTop: '2%', marginLeft: "20%", maxWidth: "70%", borderWidth: 5, borderColor: 'red' }}>
        <EventDetails
          title={props.title}
          text={props.text}
          image={props.image}
          dateTime={props.dateTime}
          location={props.location}
         />
      </div>
    );
  };
  
  export default EventCard;